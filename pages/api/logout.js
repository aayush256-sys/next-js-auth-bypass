export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Clear the authentication cookie
  res.setHeader('Set-Cookie', 'auth=; Path=/; HttpOnly; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT')
  
  return res.status(200).json({ success: true, message: 'Logged out successfully' })
} 