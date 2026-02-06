import { useState } from 'react'
import './Writing.css'

export default function Writing() {
  const [activeTab, setActiveTab] = useState<'write' | 'expand' | 'continue' | 'analyze'>('write')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    if (!input.trim()) return
    setIsGenerating(true)
    setTimeout(() => {
      const generatedContent = generateContent(activeTab, input)
      setOutput(generatedContent)
      setIsGenerating(false)
    }, 2000)
  }

  const generateContent = (type: string, text: string) => {
    switch (type) {
      case 'write':
        return `AI为您生成的内容：\n\n${text}\n\n这是一个基于您输入的AI生成示例。在实际应用中，这里会连接到真实的AI模型，为您生成高质量的小说内容、剧本或其他创作文本。\n\nAI写作功能可以帮助您：\n• 快速生成故事开头\n• 创建角色对话\n• 描写场景和氛围\n• 构建情节转折\n• 完善故事细节`
      case 'expand':
        return `AI扩写内容：\n\n${text}\n\n经过AI的智能扩写和润色，这段内容变得更加丰富和生动。AI会：\n• 扩展简短的描述\n• 增加细节和情感\n• 优化句式结构\n• 提升文字表现力\n• 保持原文风格\n\n扩写后的内容更加饱满，能够更好地吸引读者。`
      case 'continue':
        return `AI续写内容：\n\n${text}\n\nAI根据上文内容继续创作，保持了故事的风格和连贯性。续写功能：\n• 理解上下文逻辑\n• 维持角色性格\n• 延续情节发展\n• 保持语言风格\n• 创造新的冲突点\n\n当您遇到创作瓶颈时，AI续写是您的得力助手。`
      case 'analyze':
        return `AI拆书分析：\n\n${text}\n\nAI对这段内容进行了深度分析：\n\n【结构分析】\n• 开头：引人入胜的设定\n• 发展：层层递进的情节\n• 高潮：冲突的爆发\n• 结局：合理的收尾\n\n【写作技巧】\n• 使用了对比手法\n• 情感描写细腻\n• 节奏把控得当\n• 对话自然生动\n\n【改进建议】\n• 可以增加更多环境描写\n• 适当加入伏笔\n• 强化角色动机\n\n通过AI拆书，您可以学习优秀作品的写作技巧。`
      default:
        return ''
    }
  }

  const tabs = [
    { id: 'write', label: 'AI写作', icon: '📝' },
    { id: 'expand', label: 'AI扩写润色', icon: '✍️' },
    { id: 'continue', label: 'AI续写', icon: '💡' },
    { id: 'analyze', label: 'AI拆书', icon: '📚' }
  ]

  return (
    <div className="writing">
      <div className="container">
        <div className="writing-header">
          <h1 className="page-title">AI写作助手</h1>
          <p className="page-subtitle">让AI成为您的创作伙伴，激发无限灵感</p>
        </div>

        <div className="writing-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id as any)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="writing-content">
          <div className="input-section">
            <div className="section-header">
              <h2 className="section-title">输入内容</h2>
              <p className="section-description">
                {activeTab === 'write' && '输入您想要创作的内容主题或关键词'}
                {activeTab === 'expand' && '输入需要扩写和润色的文本'}
                {activeTab === 'continue' && '输入已有的故事内容，AI将为您续写'}
                {activeTab === 'analyze' && '输入需要分析的文学作品片段'}
              </p>
            </div>
            <textarea
              className="input-textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={activeTab === 'write' ? '例如：一个现代都市背景下的悬疑故事，主角是一名侦探...' : '请输入文本内容...'}
            />
            <button
              className="btn btn-primary generate-btn"
              onClick={handleGenerate}
              disabled={isGenerating || !input.trim()}
            >
              {isGenerating ? '生成中...' : '开始生成'}
            </button>
          </div>

          <div className="output-section">
            <div className="section-header">
              <h2 className="section-title">生成结果</h2>
              <p className="section-description">AI为您生成的内容将显示在这里</p>
            </div>
            <div className="output-content">
              {output ? (
                <pre className="output-text">{output}</pre>
              ) : (
                <div className="output-placeholder">
                  <div className="placeholder-icon">✨</div>
                  <p className="placeholder-text">
                    等待生成内容...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
