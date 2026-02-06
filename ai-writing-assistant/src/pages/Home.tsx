import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const features = [
    {
      icon: '📝',
      title: 'AI写作',
      description: '通过尖端AI技术，轻松创建高质量内容，从小说章节到专业文档，一键生成精彩文本'
    },
    {
      icon: '✍️',
      title: 'AI扩写润色',
      description: '智能识别文章结构，自动扩展和丰富内容，修饰句式，提升文字表现力和专业度'
    },
    {
      icon: '💡',
      title: 'AI续写',
      description: '当您遇到写作瓶颈时，AI续写功能将无缝接续您的思路，维持一致的风格和语调'
    },
    {
      icon: '📚',
      title: 'AI拆书',
      description: '智能分析文学作品的结构、情节和写作技巧，为您的创作提供专业参考和启发'
    }
  ]

  const stats = [
    { value: '10万+', label: '优质提示词' },
    { value: '5', label: '顶级大模型' },
    { value: '1000+', label: '拆解案例' },
    { value: '10+', label: '专业生成器' }
  ]

  const styles = [
    '古风仙侠', '现代都市', '未来科幻', '奇幻冒险',
    '悬疑推理', '历史架空', '浪漫爱情', '青春校园',
    '赛博朋克', '蒸汽朋克', '西方魔幻', '东方玄幻'
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              辅助10000+作者在番茄起点等网站写作
            </h1>
            <p className="hero-subtitle">
              专为网络小说、剧本创作者打造的AI增效工具
            </p>
            <div className="hero-actions">
              <Link to="/writing" className="btn btn-primary btn-large">
                开始创作
              </Link>
              <Link to="/tools" className="btn btn-secondary btn-large">
                探索工具箱
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">强大功能</h2>
          <p className="section-subtitle">创作，从未如此简单</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="styles">
        <div className="container">
          <h2 className="section-title">多样风格</h2>
          <p className="section-subtitle">适合各类创作需求</p>
          <div className="styles-grid">
            {styles.map((style, index) => (
              <div key={index} className="style-tag">
                {style}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">准备好开启您的创作之旅了吗？</h2>
            <p className="cta-subtitle">
              加入我们，探索AI写作的无限可能，让您的文字焕发生机
            </p>
            <Link to="/login" className="btn btn-primary btn-large">
              立即注册
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2026 灵感写作 · AI辅助写作平台
          </p>
        </div>
      </footer>
    </div>
  )
}
