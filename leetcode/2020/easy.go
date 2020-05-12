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