export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { username, password } = req.body

  // VULNERABLE: Hardcoded credentials (admin/admin)
  if (username === 'admin' && password === 'admin') {
    // Set authentication cookie server-side
    res.setHeader('Set-Cookie', 'auth=admin-authenticated; Path=/; HttpOnly; Max-Age=3600')
    return res.status(200).json({ success: true, message: 'Login successful' })
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials' })
  }
} 