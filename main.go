package main

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"golang.org/x/crypto/bcrypt"
)

// ฟังก์ชันเข้ารหัสรหัสผ่าน
func hashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hashedPassword), nil
}

// ฟังก์ชันเชื่อมต่อฐานข้อมูล
func connectDB() (*sql.DB, error) {
	dsn := "byte41299:412994129941299ByTe@tcp(localhost:3306)/mydatabase"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, err
	}
	// ตรวจสอบการเชื่อมต่อ
	if err := db.Ping(); err != nil {
		return nil, err
	}
	return db, nil
}

func main() {
	// เชื่อมต่อฐานข้อมูล
	db, err := connectDB()
	if err != nil {
		log.Fatal("❌ Database connection failed:", err)
	}
	defer db.Close()
	log.Println("✅ Connected to Database!")

	// สร้างตารางถ้ายังไม่มี
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS users (
			id INT AUTO_INCREMENT PRIMARY KEY,
			email VARCHAR(255) UNIQUE NOT NULL,
			password VARCHAR(255) NOT NULL,
			username VARCHAR(255) NOT NULL
		);
	`)
	if err != nil {
		log.Fatal("❌ Failed to create table:", err)
	}

	r := gin.Default()

	// API ลงทะเบียน
	r.POST("/register", func(c *gin.Context) {
		var json struct {
			Email    string `json:"email" binding:"required"`
			Password string `json:"password" binding:"required"`
			Username string `json:"username" binding:"required"`
		}

		if err := c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// เข้ารหัสรหัสผ่านก่อนบันทึก
		hashedPassword, err := hashPassword(json.Password)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Password encryption failed"})
			return
		}

		// บันทึกลงฐานข้อมูล
		_, err = db.Exec("INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
			json.Email, hashedPassword, json.Username)
		if err != nil {
			log.Println("❌ Database error:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "User registered successfully!"})
	})

	// เริ่มต้นเซิร์ฟเวอร์
	r.Run(":8080")
}
