import { useState } from 'react'
import './Tools.css'

export default function Tools() {
  const [activeTool, setActiveTool] = useState<string | null>(null)
  const [generated, setGenerated] = useState('')

  const tools = [
    { id: 'title', name: '书名生成器', icon: '📖', description: '创造吸引眼球的标题' },
    { id: 'intro', name: '简介生成器', icon: '📝', description: '简洁有力的内容概述' },
    { id: 'outline', name: '大纲生成器', icon: '📋', description: '构建完整的故事脉络' },
    { id: 'detail', name: '细纲生成器', icon: '✏️', description: '规划每个章节的细节' },
    { id: 'opening', name: '黄金开篇生成器', icon: '🌟', description: '创作引人入胜的开头' },
    { id: 'twist', name: '金手指生成器', icon: '✨', description: '设计出人意料的情节转折' },
    { id: 'names', name: '名字生成器', icon: '🏷️', description: '为角色创建独特名称' },
    { id: 'character', name: '人设生成器', icon: '👤', description: '打造立体饱满的角色形象' }
  ]

  const handleToolClick = (toolId: string) => {
    setActiveTool(toolId)
    setGenerated('')
  }

  const handleGenerate = () => {
    if (!activeTool) return
    const result = generateToolContent(activeTool)
    setGenerated(result)
  }

  const generateToolContent = (toolId: string) => {
    switch (toolId) {
      case 'title':
        return `📚 书名生成结果\n\n1. 《星河之约》\n2. 《时光回响》\n3. 《梦境边缘》\n4. 《命运之轮》\n5. 《永恒之光》\n6. 《星空之下》\n7. 《心灵密码》\n8. 《未来纪元》\n9. 《神秘档案》\n10. 《奇迹时刻》\n\n💡 提示：选择一个最符合您故事主题的书名，或者将这些书名作为灵感进行修改。`
      case 'intro':
        return `📝 简介生成结果\n\n【简介示例】\n\n在繁华的都市中，隐藏着一个不为人知的秘密组织。当普通白领林晨意外卷入其中，他的人生轨迹从此改变。面对未知的危险和诱惑，他必须在正义与生存之间做出选择。这不仅是一场关于生死的较量，更是一次对人性本质的深刻探索。\n\n✨ 简介要点：\n• 引人入胜的开头\n• 清晰的冲突设置\n• 主角的身份和目标\n• 故事的核心主题\n• 留下悬念吸引读者`
      case 'outline':
        return `📋 大纲生成结果\n\n【故事大纲】\n\n第一卷：初入江湖（1-50章）\n- 主角登场，背景介绍\n- 遭遇第一次冲突\n- 获得关键能力/物品\n- 建立核心团队\n\n第二卷：成长之路（51-100章）\n- 面对更强的敌人\n- 揭开部分秘密\n- 角色关系发展\n- 第一次重大转折\n\n第三卷：巅峰对决（101-150章）\n- 最终敌人出现\n- 所有伏笔回收\n- 高潮战斗\n- 完美结局\n\n📌 大纲建议：每个卷都有明确的目标和冲突，层层递进。`
      case 'detail':
        return `✏️ 细纲生成结果\n\n【第一章细纲】\n\n场景1：主角登场（约500字）\n- 时间地点设定\n- 主角外貌描写\n- 当前状态介绍\n\n场景2：突发事件（约800字）\n- 冲突触发\n- 主角反应\n- 环境变化\n\n场景3：初步应对（约700字）\n- 主角决策\n- 行动过程\n- 初步结果\n\n场景4：悬念结尾（约300字）\n- 新的危机\n- 伏笔埋设\n- 引发期待\n\n📊 字数分配：总计约2300字，符合网文章节标准。`
      case 'opening':
        return `🌟 黄金开篇生成结果\n\n【开篇示例】\n\n雨夜，霓虹灯在积水中破碎成无数光斑。\n\n林默站在天台边缘，脚下是这座城市最繁华的商业区。三十三层的风很大，吹得他风衣猎猎作响。他低头看了一眼手表——午夜零点。\n\n"时间到了。"\n\n他轻声说道，声音被风声淹没。\n\n这一刻，他等待了整整十年。\n\n✨ 开篇技巧：\n• 环境渲染氛围\n• 时间地点明确\n• 主角出场方式\n• 制造悬念\n• 引入核心冲突`
      case 'twist':
        return `✨ 金手指生成结果\n\n【金手指设计】\n\n类型：系统类金手指\n\n名称：无限回溯系统\n\n功能描述：\n- 可以将时间回溯到任意节点\n- 保留所有记忆和经验\n- 每次回溯消耗精神力\n- 精神力可通过特殊方式恢复\n\n限制条件：\n- 每天最多使用3次\n- 回溯时间不超过24小时\n- 无法回溯死亡状态\n\n成长路线：\n初期：短时间回溯，快速试错\n中期：多次回溯，积累经验\n后期：精准回溯，掌控全局\n\n💡 金手指原则：有得必有失，平衡是关键。`
      case 'names':
        return `🏷️ 名字生成结果\n\n【男性角色名】\n1. 林萧 - 简洁有力，适合主角\n2. 顾晨 - 温文尔雅，适合智者\n3. 沈墨 - 深沉内敛，适合反派\n4. 楚云 - 飘逸洒脱，适合侠客\n5. 江风 - 自由奔放，适合浪子\n\n【女性角色名】\n1. 苏婉 - 温柔婉约，适合女主\n2. 叶灵 - 灵动聪慧，适合谋士\n3. 白若 - 纯洁无瑕，适合配角\n4. 洛雪 - 冷艳高贵，适合女强人\n5. 夏雨 - 清新自然，适合邻家女\n\n【地名】\n1. 天机阁 - 神秘组织\n2. 落霞峰 - 风景胜地\n3. 暗夜城 - 危险地带\n4. 云梦泽 - 神秘之地\n5. 星辰海 - 浩瀚场景`
      case 'character':
        return `👤 人设生成结果\n\n【角色档案】\n\n姓名：林萧\n年龄：24岁\n职业：私家侦探\n\n外貌特征：\n- 身高180cm，身材匀称\n- 短发，眼神锐利\n- 常穿黑色风衣\n- 左眉有一道浅浅的疤痕\n\n性格特点：\n- 冷静理智，善于分析\n- 内心正义感强\n- 不善言辞，行动派\n- 对朋友忠诚\n\n背景故事：\n前警校高材生，因一次案件调查被停职。后成为私家侦探，专门处理警方不愿接手的疑难案件。三年前妹妹失踪，一直在暗中调查。\n\n能力特长：\n- 敏锐的观察力\n- 优秀的推理能力\n- 精通格斗术\n- 擅长心理分析\n\n弱点缺陷：\n- 过于执着真相\n- 不善于表达情感\n- 容易冲动\n\n📝 人设要点：立体饱满，有优点也有缺点，有过去也有目标。`
      default:
        return ''
    }
  }

  return (
    <div className="tools">
      <div className="container">
        <div className="tools-header">
          <h1 className="page-title">创意工具箱</h1>
          <p className="page-subtitle">激发你的创作灵感，让创意源源不断</p>
        </div>

        <div className="tools-grid">
          {tools.map(tool => (
            <div
              key={tool.id}
              className={`tool-card ${activeTool === tool.id ? 'active' : ''}`}
              onClick={() => handleToolClick(tool.id)}
            >
              <div className="tool-icon">{tool.icon}</div>
              <h3 className="tool-name">{tool.name}</h3>
              <p className="tool-description">{tool.description}</p>
            </div>
          ))}
        </div>

        {activeTool && (
          <div className="tool-panel">
            <div className="tool-panel-header">
              <h2 className="tool-panel-title">
                {tools.find(t => t.id === activeTool)?.name}
              </h2>
              <button className="btn btn-primary" onClick={handleGenerate}>
                生成内容
              </button>
            </div>
            <div className="tool-panel-content">
              {generated ? (
                <pre className="generated-content">{generated}</pre>
              ) : (
                <div className="tool-placeholder">
                  <div className="placeholder-icon">🎨</div>
                  <p className="placeholder-text">
                    点击"生成内容"按钮，AI将为您生成创作素材
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
