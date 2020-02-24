import jwtDecode from 'jwt-decode'
const now = () => new Date() / 1000 | 0

export const isTokenValid = (token) => {
  if (!token) return false
  try {
    const tokenInfo = jwtDecode(token)
    // all right, the token is valid one, let's check expriration time
    return tokenInfo.exp > now()
  } catch (e) {
    // not valid JWT token
    return false
  }
}
