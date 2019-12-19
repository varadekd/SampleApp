package main

import (
	// "fmt"
	"net/http"
   	"net/http/httptest"
	"testing"
	"github.com/stretchr/testify/assert"
)

var router = SetupRouter()

// Global function that handles the request
func requestHandler(router http.Handler, method, path string) *httptest.ResponseRecorder {
	req, _ := http.NewRequest(method, path, nil)
	res := httptest.NewRecorder()
	router.ServeHTTP(res, req)
	return res
 }

func TestAllUsers(t *testing.T){
	res := requestHandler(router, "GET", "/v1/users")

	assert.Equal(t, http.StatusOK , res.Code , "Status Ok, is expected") 
}

func TestAllUsersNotFound(t *testing.T){
	res := requestHandler(router, "GET", "/users")
	assert.Equal(t, http.StatusNotFound , res.Code , "Status Not found, is expected") 
}