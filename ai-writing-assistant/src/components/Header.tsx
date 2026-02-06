import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">灵感写作</span>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">首页</Link>
            <Link to="/writing" className="nav-link">AI写作</Link>
            <Link to="/tools" className="nav-link">创意工具箱</Link>
          </nav>
          <div className="header-actions">
            <Link to="/login" className="btn btn-secondary">登录</Link>
            <Link to="/login" className="btn btn-primary">注册</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
