import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(isLogin ? '登录成功！' : '注册成功！')
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      username: '',
      password: '',
      email: '',
      confirmPassword: ''
    })
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">
              {isLogin ? '欢迎回来' : '创建账号'}
            </h1>
            <p className="login-subtitle">
              {isLogin ? '登录您的账号继续创作' : '注册账号开启AI写作之旅'}
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label className="form-label">邮箱</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="请输入邮箱"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label">用户名</label>
              <input
                type="text"
                name="username"
                className="form-input"
                placeholder="请输入用户名"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">密码</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="请输入密码"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label className="form-label">确认密码</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-input"
                  placeholder="请再次输入密码"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  <span>记住我</span>
                </label>
                <a href="#" className="forgot-link">忘记密码？</a>
              </div>
            )}

            <button type="submit" className="btn btn-primary submit-btn">
              {isLogin ? '登录' : '注册'}
            </button>
          </form>

          <div className="divider">
            <span className="divider-text">或</span>
          </div>

          <div className="social-login">
            <button className="social-btn wechat">
              <span className="social-icon">💬</span>
              <span>微信登录</span>
            </button>
          </div>

          <div className="toggle-mode">
            <span className="toggle-text">
              {isLogin ? '还没有账号？' : '已有账号？'}
            </span>
            <button className="toggle-btn" onClick={toggleMode}>
              {isLogin ? '立即注册' : '立即登录'}
            </button>
          </div>

          <div className="login-footer">
            <p className="footer-text">
              {isLogin ? '登录即表示您同意' : '注册即表示您同意'}{' '}
              <a href="#" className="footer-link">用户协议</a> 和{' '}
              <a href="#" className="footer-link">隐私政策</a>
            </p>
          </div>
        </div>

        <div className="login-info">
          <div className="info-content">
            <h2 className="info-title">灵感写作</h2>
            <p className="info-description">
              专为网络小说、剧本创作者打造的AI增效工具
            </p>
            <div className="info-features">
              <div className="info-feature">
                <span className="feature-icon">📝</span>
                <span className="feature-text">AI智能写作</span>
              </div>
              <div className="info-feature">
                <span className="feature-icon">✨</span>
                <span className="feature-text">创意工具箱</span>
              </div>
              <div className="info-feature">
                <span className="feature-icon">📚</span>
                <span className="feature-text">海量资源库</span>
              </div>
              <div className="info-feature">
                <span className="feature-icon">🚀</span>
                <span className="feature-text">高效创作</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
