package main

import (
	"encoding/json"
	"net/http"
   	"net/http/httptest"
	"testing"
	"github.com/stretchr/testify/assert"
)

// Global variable we will be using this quite often
var router = SetupRouter()
var response map[string]interface{}

// Global function that handles the request
func requestHandler(router http.Handler, method, path string) *httptest.ResponseRecorder {
	req, _ := http.NewRequest(method, path, nil)
	res := httptest.NewRecorder()
	router.ServeHTTP(res, req)
	return res
 }

// Checking that the API should always return 200 status (Makes sure API exist)
func TestAllUsers(t *testing.T){
	res := requestHandler(router, "GET", "/v1/users")
	assert.Equal(t, http.StatusOK , res.Code , "Expecting 200 (Ok)") 
}

// In case of all users Invalid API 404 is been checked 
func TestAllUsersNotFound(t *testing.T){
	res := requestHandler(router, "GET", "/users")
	assert.Equal(t, http.StatusNotFound , res.Code , "Expecting 404 (Not found)") 
}

// Checking that the API should always return 200 status (Makes sure API exist)
func TestGetUserDetail(t *testing.T){
	res := requestHandler(router, "GET", "/v1/user/kushagra")
	assert.Equal(t, http.StatusOK , res.Code , "Expecting 200 (Ok)") 
}

// Checking that the API should always return 200 status (Makes sure returned data have some minimal props, is not nil and checking no key is missing)
func TestGetUserDetailJson(t *testing.T){
	res := requestHandler(router, "GET", "/v1/user/kushagra")
	err := json.Unmarshal([]byte(res.Body.String()), &response)   
	
	// Looking name should always be there
	_ , nameExist := response["name"]
	
	// Checking the error should be nil, and values should be present
	assert.Nil(t, err , "Expecting the error should be nil")
	assert.True(t, nameExist , "Name field is missing")
}

// Checking in case of passing incorrect param API should response with 404
func TestGetUserDetailNotFound(t *testing.T){
	res := requestHandler(router, "GET", "/v1/user/dummyName")
	assert.Equal(t, http.StatusNotFound, res.Code , "Expecting 404 (Not found)")
}