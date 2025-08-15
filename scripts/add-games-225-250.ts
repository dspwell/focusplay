import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const games225to250 = [
  {
    id: 'long-jump-champion-225',
    name: '🏅🦘 跳远小冠军：一跃更远（户外起跳线）',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '挑战立定跳远的最大距离，锻炼腿部爆发力和落地缓冲能力。',
    materials: '一片平坦安全的场地，可以用一根绳子或粉笔做起跳线。',
    steps: [
      '热身运动：先和孩子一起做一些简单的热身，如原地跳、高抬腿。',
      '示范标准动作：家长示范标准的立定跳远动作：双脚与肩同宽，屈膝下蹲，双臂后摆，然后用力向前上方跳出，落地时屈膝缓冲。',
      '孩子挑战：让孩子从起跳线开始，用力向前跳。',
      '记录与超越：孩子跳出后，可以在他的落脚点做一个标记。然后鼓励他下一次尝试"跳得比这个标记更远一点"，挑战自我。'
    ],
    tips: [
      '安全第一：确保场地平坦、无障碍物，落地时不会滑倒。',
      '强调落地缓冲：一定要教孩子落地时膝盖要弯曲，用以缓冲对膝盖的冲击。',
      '激发好胜心："超越自己"能极大地激发孩子的好胜心和运动潜能。',
      '全身性爆发力：立定跳远是锻炼全身爆发力的黄金动作。'
    ],
    duration: 20,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保场地平坦、无障碍物，落地时不会滑倒。',
    extensions: null
  },
  {
    id: 'mood-weather-bottle-226',
    name: '🌈🫧 心情小天气瓶：摇一摇看晴雨（情绪角）',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'social',
    core_goal: '学习用具体、可视化的方式来表达和理解抽象的情绪。',
    materials: '一个透明的塑料瓶（带盖子），水，亮粉，棉花，食用色素（可选）。',
    steps: [
      '讨论情绪天气：和孩子讨论不同的心情像什么天气。比如"开心的时候，心里就像撒满了金色的亮粉，闪闪发光。""难过的时候，心里就像下雨，是蓝色的。""生气的时候，心里像一团乌云（棉花）。"',
      '选择今日天气：问孩子："你今天的心情是什么天气呀？"让他选择代表性的材料。',
      '制作天气瓶：帮助孩子将水和代表他心情的材料（如亮粉）装进瓶子里，拧紧盖子。',
      '观察与平静：摇晃瓶子，和他一起观察里面的"天气"如何翻涌，然后慢慢地、慢慢地平静下来。'
    ],
    tips: [
      '情绪的出口：这是一个帮助孩子安全地识别、命名和表达情绪的绝佳工具。',
      '作为"冷静瓶"：当孩子情绪激动时，可以引导他去摇晃和观察这个瓶子，帮助他将注意力从情绪本身转移开，直到心情像瓶里的亮粉一样慢慢平复。',
      '非语言表达：对于不善于用语言表达情绪的孩子，这是一个很好的非语言表达工具。',
      '家长也适用：家长也可以制作自己的"天气瓶"，向孩子展示大人也有各种各样的情绪。'
    ],
    duration: 30,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保瓶子和材料安全。',
    extensions: null
  },
  {
    id: 'touch-memory-bag-227',
    name: '✋🎒 触觉记忆袋：伸手猜猜看（口袋探奇）',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '在没有视觉提示的情况下，锻炼触觉记忆和分辨能力。',
    materials: '一个不透明的布袋，3-4个形状和材质差异明显的小物件（如：钥匙、积木、棉花球、勺子）。',
    steps: [
      '认识物品：先让孩子看一看、摸一摸袋子外面的所有物品，并说出它们的名字。',
      '放入袋中：将所有物品都放进布袋里。',
      '触觉探索：让孩子把手伸进袋子里，不许偷看，摸到一个物品后，说出它的名字，然后再拿出来验证。',
      '记忆挑战：让孩子闭上眼睛，家长从袋子里悄悄拿走一样东西。然后让孩子再把手伸进去摸，说出"什么东西不见了？"'
    ],
    tips: [
      '锻炼实体感知：屏蔽视觉后，孩子需要完全依靠触觉在大脑中重建物品的立体形象。',
      '从少到多：初期只放2-3样物品，熟练后再增加。',
      '增加难度：可以放入形状或材质较为相似的物品，增加分辨的难度。',
      '便携游戏：这是非常好的便携式"口袋游戏"，适合在旅途中玩。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'cause-effect-chain-228',
    name: '⛓️➡️⚙️ 因果接龙：所以与因为（睡前逻辑台）',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼理解和表达连续因果关系的能力，发展逻辑思维。',
    materials: '无。',
    steps: [
      '家长开头：家长先说一个"原因"，例如："因为天黑了……"',
      '孩子接"结果"：孩子需要接一个合理的结果："……所以我们要开灯。"',
      '结果变原因：家长再把孩子的结果当作新的原因，继续提问："因为我们开了灯……"',
      '孩子再接：孩子再接："……所以房间就变亮了。"如此循环下去。'
    ],
    tips: [
      '锻炼思维链条：这个游戏能很好地锻炼孩子思维的连贯性和逻辑性。',
      '接受合理联想：孩子接的"结果"只要在逻辑上说得通，都应予以鼓励。',
      '从生活中来：所有的因果关系最好都源于孩子熟悉的生活经验。',
      '增加趣味：可以故意说一些无厘头的"原因"，比如"因为小猪想飞"，看看孩子会接出怎样充满想象力的"结果"。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'bean-mosaic-229',
    name: '🫘🎨 豆子马赛克：一点一点拼（手作小画室）',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼捏取小颗粒并将其精确粘贴的能力，进行艺术创作。',
    materials: '一张硬卡纸，胶水，各种颜色和大小的豆子（如红豆、绿豆、玉米粒）。',
    steps: [
      '绘制底稿：家长先在卡纸上用铅笔画一个简单的轮廓，比如一个苹果或一朵花。',
      '涂抹胶水：引导孩子在轮廓内的某一小块区域，用棉签或手指涂上薄薄的一层胶水。',
      '粘贴豆子：让孩子用手指捏起豆子，一颗一颗地按在涂了胶水的地方。',
      '分区域完成：一块区域完成后，再涂下一块区域的胶水，直到整个图案被豆子填满。'
    ],
    tips: [
      '安全第一：必须在家长一对一监护下进行，防止孩子将豆子放入口、鼻中。结束后彻底洗手和清理。',
      '锻炼前三指：捏取小小的豆子，对锻炼前三指的协调和力量非常有益。',
      '耐心与专注：这是一项需要极大耐心和专注力的"慢工细活"。',
      '材质混搭：除了豆子，还可以用大米、小米、意大利面等其他安全的谷物进行创作。'
    ],
    duration: 25,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '必须在家长一对一监护下进行，防止孩子将豆子放入口、鼻中。',
    extensions: null
  },
  {
    id: 'crab-walk-challenge-230',
    name: '🦀↔️ 螃蟹走路：横着走大挑战（客厅爬行道）',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼四肢的协调性、核心力量和逆向运动能力。',
    materials: '一片开阔的活动空间。',
    steps: [
      '示范动作：家长演示"螃蟹走"的姿势：坐在地上，双手在身后撑地，双脚踩地，然后将臀部抬起，使身体悬空。',
      '开始行走：用手和脚协调发力，横着向一侧移动。',
      '孩子模仿：鼓励孩子也做出同样的姿势并尝试移动。',
      '螃蟹比赛：可以设定一个终点，和孩子比赛谁的"螃蟹"走得快。'
    ],
    tips: [
      '锻炼核心和上肢力量：这个动作对孩子的核心腹部、背部以及手臂的支撑力量是很好的锻炼。',
      '身体协调性挑战：这是一种不常见的、手脚并用的逆向运动模式，对身体的协调性是很大的挑战。',
      '充满乐趣：笨拙又滑稽的螃蟹走，能带来很多欢笑。',
      '安全提示：确保地面防滑，没有障碍物。'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保地面防滑，没有障碍物。',
    extensions: null
  },
  {
    id: 'compliment-rain-231',
    name: '🌧️👏 优点轰炸：赞美雨点（镜前夸夸屋）',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'social',
    core_goal: '通过具体表扬增强自尊与安全依恋。',
    materials: '无。',
    steps: [
      '设定规则：轮流说彼此一个"具体优点"，如"你今天把杯子自己收好"。',
      '家长示范：先说3条不同场景的优点，示范"具体而真诚"。',
      '孩子回敬：鼓励孩子也说出对家长的优点或感谢。',
      '小结收心：一起挑出最暖心的一条，做"今日贴纸"。'
    ],
    tips: [
      '具体可见：只夸可观察到的行为，不泛泛而谈。',
      '数量目标：新手先各说3条即可。',
      '多角度：从努力、善良、勇气等角度找优点。',
      '可视化：把"金句"写在便签上贴到"夸夸墙"。'
    ],
    duration: 10,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'emotion-bingo-232',
    name: '🙂🃏 情绪宾果：找脸脸（沙发笑脸铺）',
    age_range: '3-4',
    scene: 'home',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '识别与命名常见情绪，提高共情表达。',
    materials: '3×3表情宾果卡、标记物。',
    steps: [
      '展示卡面：认识九种表情并练习读名词（开心、难过、害怕…）。',
      '游戏开局：家长口播情绪词，孩子在卡上盖标记。',
      '宾果达成：任一行/列/对角线连成一线即喊"宾果"。',
      '角色互换：轮到孩子口播情绪，由家长找。'
    ],
    tips: [
      '加入情境：说出该情绪在生活中的例子。',
      '表演辅助：用表情+动作加深理解。',
      '词汇扩展：加入"紧张、失望、惊喜"等。',
      '温柔纠正：只做轻提醒，避免否定。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'shadow-matching-233',
    name: '🔦🧱 影子配对：灯下侦探（小屋影子站）',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '通过影子轮廓进行形状匹配与推理。',
    materials: '台灯、白纸、几块积木/玩具。',
    steps: [
      '制作轮廓：打灯投影，沿影子边缘描出轮廓卡。',
      '打乱卡片：将轮廓卡与实物分开放置。',
      '影物配对：让孩子根据影子特征找到对应实物。',
      '验证调整：调灯远近观察影子变化并修正猜测。'
    ],
    tips: [
      '安全摆灯：灯光勿直射眼睛。',
      '语言引导：说出"角、直线、曲线"等特征。',
      '单变量：只改距离或角度中的一个。',
      '留存卡片：做成"影子图鉴"反复玩。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '灯光勿直射眼睛。',
    extensions: null
  },
  {
    id: 'car-slope-experiment-234',
    name: '🚗🛝 小车坡道：快慢实验（客厅斜坡场）',
    age_range: '3-4',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '直观感受坡度与速度的关系，学习预测与验证。',
    materials: '厚书/木板做斜坡、玩具小车两辆。',
    steps: [
      '搭建两坡：一高一低两条斜坡并排。',
      '先做预测：问"哪辆会更快？为什么？"',
      '同发实验：同时放车观察结果。',
      '调整变量：只改坡度或路面，重复验证。'
    ],
    tips: [
      '一次一变：控制变量建立因果。',
      '记录结果：用贴纸做"胜利计数"。',
      '安全边界：末端垫软物防冲撞。',
      '迁移提问：生活中哪里也有"下坡更快"？'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '末端垫软物防冲撞。',
    extensions: null
  },
  {
    id: 'finger-maze-235',
    name: '🌀👆 手指迷宫：不出线挑战（桌面路线图）',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'fine',
    core_goal: '提高手眼协调与精细控制。',
    materials: '打印或手绘迷宫。',
    steps: [
      '规则说明：手指沿路走，不能碰到边线。',
      '家长示范：慢速走一遍说出转弯口令。',
      '孩子挑战：自主完成，可计时。',
      '升级难度：变窄、加岔路或换"棉签作笔"。'
    ],
    tips: [
      '从宽到窄：难度渐进。',
      '慢即稳：鼓励慢速专注。',
      '多工具：棉签、吸管、筷子替代。',
      '成就展示：通关贴章。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'sound-radar-236',
    name: '👂🔍 听声找物：声音雷达（被窝寻宝）',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '练习声源定位与"冷热提示"推理。',
    materials: '小物件、薄毯/抱枕。',
    steps: [
      '藏好宝物：家长遮眼时由孩子藏或反之。',
      '发出提示：家长口令"热/冷"或敲击提示。',
      '搜索接近：孩子依据声音方向移动。',
      '互换角色：轮流当"雷达"和"搜寻员"。'
    ],
    tips: [
      '声量适中：避免惊吓。',
      '逐步提示：由模糊到具体。',
      '复盘路径：讲清如何判断方向。',
      '变体：使用沙锤/铃铛。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'color-relay-237',
    name: '🟥🏃 颜色接力：找找贴贴（家里彩虹道）',
    age_range: '2.5-3',
    scene: 'home',
    props: 'paper',
    focus: 'gross',
    core_goal: '颜色识别与快速反应，结合跑跳。',
    materials: '彩色贴纸/便签，分散贴在家中。',
    steps: [
      '设定任务：听到颜色就跑去贴并带回一张。',
      '示范一轮：家长先做演示。',
      '儿童执行：快速寻找并回到起点贴在"颜色栏"。',
      '变换口令：加入"两张蓝""圆形红"等组合。'
    ],
    tips: [
      '安全路线：清空障碍。',
      '控制节奏：以短冲刺为主。',
      '语言强化：大声读出颜色名。',
      '记录次数：统计完成量。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '清空障碍。',
    extensions: null
  },
  {
    id: 'desktop-bulldozer-238',
    name: '🫘🚜 桌面推土机：豆子运河（厨房施工队）',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '学习稳定推、刮、捧的动作控制。',
    materials: '豆子、卡片/尺子、托盘。',
    steps: [
      '倒豆成堆：中央堆一小堆。',
      '示范推刮：用卡片沿线推到"仓库"。',
      '孩子操作：按路线把豆子运到不同区。',
      '工具更替：尝试勺子、小刷子等。'
    ],
    tips: [
      '小量多次：避免泼洒挫败。',
      '双手协作：一手稳托一手推。',
      '卫生收尾：集中回收洗手。',
      '主题化：画道路和仓库更有趣。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保豆子安全，避免误食。',
    extensions: null
  },
  {
    id: 'little-mailman-239',
    name: '📮👣 小小邮差：送信到家（走廊投递线）',
    age_range: '2.5-3',
    scene: 'home',
    props: 'paper',
    focus: 'social',
    core_goal: '练习任务执行与礼貌用语。',
    materials: '信封、贴纸、"地址"门牌。',
    steps: [
      '准备地址：给房间贴"爸爸屋/奶奶屋"。',
      '装入信件：放画作或祝福小纸条。',
      '投递流程：敲门、说"请签收"，贴上已送达章。',
      '收尾盘点：清点投递完成情况。'
    ],
    tips: [
      '任务清单：列出需投递的名单。',
      '社交练习：练"你好、谢谢"。',
      '路线规划：选最短路径。',
      '仪式感：佩戴"邮差臂章"。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'shadow-mirror-exercise-240',
    name: '🖐️🪞 影子镜像操：左右变变变（窗边阳光馆）',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'gross',
    core_goal: '提升左右辨认与镜像模仿。',
    materials: '阳光/台灯光源。',
    steps: [
      '家长做领：举左手、抬右脚等镜像动作。',
      '口令加入：加"左/右/上/下"口号。',
      '变速挑战：慢-快-停顿的节奏控制。',
      '角色互换：让孩子当"镜子船长"。'
    ],
    tips: [
      '明确站位：面对面更易镜像。',
      '从大到小：先大动作再指尖。',
      '节奏音乐：配拍手更稳定。',
      '空间安全：旁边留出余量。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'priority-sorting-241',
    name: '🗂️🔢 优先级排序：先做哪件？（收纳任务台）',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'cognition',
    core_goal: '学习任务分解与顺序计划。',
    materials: '三张任务图卡（穿鞋/喝水/收玩具）。',
    steps: [
      '明确目标："出门前得完成3件事"。',
      '孩子排序：排出1-2-3并说明理由。',
      '按序执行：做完一张翻面或打钩。',
      '总结复盘：哪一步最难？为什么？'
    ],
    tips: [
      '视觉外化：用卡片降低记忆负担。',
      '限定选项：先从3项起步。',
      '强化因果：连接"因为…所以…"。',
      '迁移应用：用于晚间流程。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'napkin-folding-242',
    name: '🐰📐 餐巾折折乐：兔耳朵站起来（餐桌折纸点）',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '练习对齐、按压与序列步骤。',
    materials: '纸餐巾/方纸。',
    steps: [
      '对折成三角：指导边对齐、压实。',
      '再次折叠：形成长条耳朵。',
      '立体成形：底部折叠让其站立。',
      '摆盘装饰：为每人做好一只。'
    ],
    tips: [
      '慢口令："对齐—按压—翻面"。',
      '纠错友好：展开重来不嫌多。',
      '纸张选择：稍厚更易成型。',
      '成果展示：拍照进"餐桌画报"。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'rainbow-salad-chef-243',
    name: '🥗🌈 小厨配菜师：彩虹沙拉（厨房色彩吧）',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '色彩分类与均衡选择。',
    materials: '多色安全小食材、小碗。',
    steps: [
      '规则说明：每种颜色挑一样放盘。',
      '孩子挑选：自主组合彩虹配料。',
      '摆盘造型：排成圈/心/笑脸。',
      '品尝描述：说说味道与口感。'
    ],
    tips: [
      '卫生安全：清洗、切小块。',
      '颜色词汇：红黄绿紫的命名练习。',
      '尊重偏好：允许替代选项。',
      '参与决策：让孩子当"小主厨"。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '食材清洗干净，切成安全大小。',
    extensions: null
  },
  {
    id: 'shape-hopscotch-244',
    name: '⬛⬜ 跳格子变奏：形状跳跳跳（院子几何道）',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'household',
    focus: 'gross',
    core_goal: '平衡与节律配合，认识形状。',
    materials: '粉笔画圆/三角/方格路线。',
    steps: [
      '示范规则：圆双脚、三角单脚、方格并步。',
      '孩子练习：按口令前进。',
      '加入节拍：拍手/数拍跳格。',
      '自设路线：让孩子设计新序列。'
    ],
    tips: [
      '渐进距离：先短后长。',
      '鞋袜合适：防滑更安全。',
      '口令清晰：形状+动作组合。',
      '鼓励创新：接受"奇妙路线"。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保地面安全，防滑。',
    extensions: null
  },
  {
    id: 'footprint-detective-245',
    name: '👣🕵️ 脚印谁的？痕迹小侦探（沙盘痕迹馆）',
    age_range: '3-4',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '通过特征比对进行推理。',
    materials: '沙盘/面粉盘、几种鞋底/玩具脚。',
    steps: [
      '制作样本：压出不同脚印。',
      '留下线索：随机盖一个"现场脚印"。',
      '观察比对：用线条/大小判定"嫌疑"。',
      '反向推理：让孩子出题家长来猜。'
    ],
    tips: [
      '用放大镜：强化细节观察。',
      '单一线索：先比大小再比纹路。',
      '拍照存档：做"痕迹手册"。',
      '清理善后：擦桌扫地。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'balloon-volleyball-246',
    name: '🎈🏐 气球运球：不落地接力（客厅云朵道）',
    age_range: '2.5-3',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '眼手协调与节律控制。',
    materials: '气球若干。',
    steps: [
      '设定目标：连续拍打不落地。',
      '限制部位：只用头/肘/脚背。',
      '设定终点：运送到"篮筐区"。',
      '计数排行：记录最高连击数。'
    ],
    tips: [
      '清空区域：远离尖锐物。',
      '口号节奏："拍-停-拍"。',
      '规则多样：双人互传接力。',
      '情绪管理：落地也鼓励重来。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '远离尖锐物。',
    extensions: null
  },
  {
    id: 'word-judge-247',
    name: '⚖️🗣️ 词汇小法官：用得对不对（沙发裁判席）',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '纠错与精确表达。',
    materials: '无。',
    steps: [
      '家长出题：故意错用词句如"鱼在树上飞"。',
      '孩子判决：说"错在…应改为…"。',
      '角色互换：孩子出题家长答。',
      '记录金句：收集有趣改法。'
    ],
    tips: [
      '友善氛围：不嘲笑、不讥讽。',
      '说出理由：要求给出依据。',
      '难度分级：从名词到动词再到量词。',
      '生活迁移：日常遇到随手纠正。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'magnetic-house-248',
    name: '🧲🏠 磁贴拼房：家电找家（冰箱任务墙）',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '依据用途/地点进行分类。',
    materials: '自制房间底板+家电磁贴。',
    steps: [
      '讲解房间：厨房/卧室/浴室功能。',
      '打乱磁贴：混合放置待分类。',
      '孩子归位：贴到合适房间并说理由。',
      '检查讨论：对混淆项共同决定。'
    ],
    tips: [
      '规则一致：先按"地点"单一维度。',
      '混淆训练：如"毛巾/纸巾"。',
      '语言句式："因为…所以在…"。',
      '墙面看板：持续更新补充。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'flashlight-theater-249',
    name: '🔦🎭 手电图案剧场：墙上放电影（床头光影屋）',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '叙事连贯与角色扮演。',
    materials: '手电、剪影小卡或手偶。',
    steps: [
      '搭暗场景：墙作幕。',
      '家长开篇：照出主角讲开头。',
      '孩子接龙：补中段与转折。',
      '结尾收束：合作完成并复述。'
    ],
    tips: [
      '眼睛保护：光勿直射眼。',
      '三要素：人物-地点-任务。',
      '声线变化：练情绪表达。',
      '录音回放：听自己故事。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '光勿直射眼睛。',
    extensions: null
  },
  {
    id: 'savings-jar-250',
    name: '🏦🎯 小目标存钱罐：为愿望存一点（理财萌芽角）',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '认识延迟满足与目标管理。',
    materials: '透明罐、目标图片、贴纸/硬币。',
    steps: [
      '贴上目标：画或贴"想要的物"。',
      '约定规则：完成任务得贴纸/硬币。',
      '观察进度：每晚数数与对比。',
      '达标兑现：讲述努力历程。'
    ],
    tips: [
      '小步快跑：目标周期不宜过长。',
      '明确任务：可量化可完成。',
      '真实兑现：形成闭环。',
      '谈感受：记录坚持中的难点。'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  }
]

async function addGames225to250() {
  try {
    console.log('开始添加游戏225-250...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = games225to250.filter(game => {
      const isDuplicateId = existingGameIds.has(game.id)
      const isDuplicateName = existingGameNames.has(game.name)
      
      if (isDuplicateId || isDuplicateName) {
        console.log(`跳过重复游戏: ${game.name}`)
        return false
      }
      return true
    })

    console.log(`准备添加 ${newGames.length} 个新游戏`)

    if (newGames.length === 0) {
      console.log('没有新游戏需要添加')
      return
    }

    const { data, error } = await supabase
      .from('games')
      .insert(newGames)
      .select('id, name')

    if (error) {
      console.error('批量插入游戏时出错:', error)
      return
    }

    console.log(`✅ 成功添加 ${data.length} 个游戏！`)
    console.log('新添加的游戏:')
    data.forEach((game, index) => {
      console.log(`${index + 1}. ${game.name}`)
    })

  } catch (error) {
    console.error('脚本执行出错：', error)
  }
}

if (require.main === module) {
  addGames225to250()
    .then(() => {
      console.log('游戏225-250添加完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}