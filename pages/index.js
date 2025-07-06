import Head from 'next/head'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Head>
        <title>Hello World - Next.js 12.2</title>
        <meta name="description" content="Simple Hello World Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{
        backgroundColor: 'white',
        padding: '3rem',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#333',
          marginBottom: '1rem'
        }}>
          Hello World! 🚀
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '2rem'
        }}>
          Welcome to Next.js 12.2
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: '#e3f2fd',
            padding: '1rem',
            borderRadius: '5px',
            border: '1px solid #bbdefb'
          }}>
            <h3 style={{ color: '#1976d2', margin: '0 0 0.5rem 0' }}>
              📦 Next.js 12.2
            </h3>
            <p style={{ color: '#1976d2', margin: 0, fontSize: '0.9rem' }}>
              React framework
            </p>
          </div>

          <div style={{
            backgroundColor: '#f3e5f5',
            padding: '1rem',
            borderRadius: '5px',
            border: '1px solid #e1bee7'
          }}>
            <h3 style={{ color: '#7b1fa2', margin: '0 0 0.5rem 0' }}>
              ⚛️ React 18.2
            </h3>
            <p style={{ color: '#7b1fa2', margin: 0, fontSize: '0.9rem' }}>
              UI library
            </p>
          </div>

          <div style={{
            backgroundColor: '#e8f5e8',
            padding: '1rem',
            borderRadius: '5px',
            border: '1px solid #c8e6c9'
          }}>
            <h3 style={{ color: '#388e3c', margin: '0 0 0.5rem 0' }}>
              🎯 Simple
            </h3>
            <p style={{ color: '#388e3c', margin: 0, fontSize: '0.9rem' }}>
              Proof of concept
            </p>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '5px',
          border: '1px solid #dee2e6'
        }}>
          <h3 style={{ color: '#495057', margin: '0 0 0.5rem 0' }}>
            🔧 Getting Started
          </h3>
          <p style={{ color: '#495057', margin: 0, fontSize: '0.9rem' }}>
            This is a simple Next.js 12.2 application. Edit pages/index.js to get started!
          </p>
        </div>

        <div style={{
          marginTop: '1rem',
          textAlign: 'center'
        }}>
          <a
            href="/login"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#1976d2',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              marginRight: '1rem'
            }}
          >
            🔐 Admin Login
          </a>
          <a
            href="/admin"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4caf50',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
          >
            🛡️ Admin Panel
          </a>
        </div>
      </div>
    </div>
  )
} 