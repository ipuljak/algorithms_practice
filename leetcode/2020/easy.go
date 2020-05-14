import (
    "fmt"
    "strings"
)

// 1. Two Sum
func twoSum(nums []int, target int) []int {
    m := make(map[int]int)
    
    for i, x := range nums {
        if _, ok := m[x]; ok {
            return []int{m[x], i}
        }
        
        m[target - x] = i
    }
    
    return []int{}
}


// 7. Reverse Integer
func reverse(x int) int {
    var result int
    
    for x != 0 {
        result = result * 10 + x % 10
        
        if result > 2147483647  || result < -2147483648{
            return 0
        }
        
        x = x / 10
    }
    
    return result
}


// 9. Palindrome Number
func isPalindrome(x int) bool {
    reverse := 0
    y := x
    
    for y > 0 {
        remainder := y % 10
        reverse *= 10
        reverse += remainder
        y /= 10
    }
    
    return reverse == x
}


// 13. Roman to Integer
func romanToInt(s string) int {
    result := 0
    
    for i := 0; i < len(s); i++ {
        switch string(s[i]) {
        case "I":
            if (i + 1) < len(s) && string(s[i + 1]) != "I" {
                result -= 1
            } else {
                result += 1
            }
            
        case "V":
            result += 5
            
        case "X":
            if (i + 1) < len(s) && (string(s[i + 1]) == "L" || string(s[i + 1]) == "C") {
                result -= 10
            } else {
                result += 10
            }
            
        case "L":
            result += 50
            
        case "C":
            if (i + 1) < len(s) && (string(s[i + 1]) == "D" || string(s[i + 1]) == "M") {
                result -= 100
            } else {
                result += 100
            }
            
        case "D":
            result += 500
            
        case "M":
            result += 1000
        }
    }
    
    return result
}


// 14. Longest Common Prefix (vertical scanning)
func longestCommonPrefix(strs []string) string {
    if len(strs) == 0 {
        return ""
    }
    
    result := ""
    
    for i := 0; i < len(strs[0]); i++ {
        for j := 1; j < len(strs); j++ {
            if i > len(strs[j]) -1 || strs[0][i] != strs[j][i] {
                return result
            }
        }
        
        result += string(strs[0][i])
    }
    
    return result
}


// 20. Valid Parentheses
func isValid(s string) bool {
    var stack []rune
        
    for _, char := range s {
        if char == '(' || char == '{' || char == '[' {
            stack = append(stack, char)
        } else {
            if len(stack) == 0 {
                return false
            }
            
            if char == ')' && stack[len(stack) - 1] != '(' {
                return false
            }
            
            if char == '}' && stack[len(stack) - 1] != '{' {
                return false
            }
            
            if char == ']' && stack[len(stack) - 1] != '[' {
                return false
            }
            
            stack = stack[:len(stack) - 1]
        }
    }
    
    return len(stack) == 0
}