# 数据库迁移脚本

## 概述
这个目录包含将游戏数据从硬编码的 `gameDatabase.ts` 迁移到 Supabase 数据库的脚本。

## 文件说明

### `create-games-table.sql`
创建 `games` 表的 SQL 脚本，包含：
- 完整的表结构
- 索引优化
- 行级安全策略 (RLS)
- 自动更新时间戳的触发器

### `migrate-games-data.ts`
将 182 个游戏从硬编码数据迁移到 Supabase 数据库的 TypeScript 脚本。

## 迁移步骤

### 1. 设置环境变量
确保在 `.env.local` 中设置以下变量：
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 2. 创建数据库表
在 Supabase SQL 编辑器中运行：
```bash
cat scripts/create-games-table.sql
```

### 3. 运行数据迁移
```bash
npm run migrate-games
```

### 4. 验证迁移
迁移脚本会自动验证并显示：
- 处理的游戏总数
- 成功迁移的数量
- 错误数量
- 数据库中的最终游戏数量

## 迁移后的变更

### API 更新
- `app/api/generate/route.ts` 现在使用 `gameService.ts` 而不是硬编码的 `gameDatabase.ts`
- 支持异步数据库查询

### 新的游戏服务
`lib/gameService.ts` 提供：
- `getRandomGame()` - 根据条件获取随机游戏
- `getGames()` - 获取游戏列表
- `getGameById()` - 根据ID获取游戏
- `getGamesCount()` - 获取游戏数量
- `getGameStatistics()` - 获取游戏统计信息

### 数据库结构
```sql
CREATE TABLE games (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    age_range VARCHAR NOT NULL,
    scene VARCHAR NOT NULL,
    props VARCHAR NOT NULL,
    focus VARCHAR NOT NULL,
    core_goal TEXT NOT NULL,
    materials TEXT NOT NULL,
    steps TEXT[] NOT NULL,
    tips TEXT[] NOT NULL,
    safety_notes TEXT,
    extensions TEXT,
    duration INTEGER NOT NULL,
    difficulty INTEGER NOT NULL,
    activity_type VARCHAR NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 性能优化
- 创建了多个索引以优化查询性能
- 使用批量插入减少数据库连接次数
- 支持分块处理大量数据

## 安全性
- 启用了行级安全策略 (RLS)
- 只允许认证用户修改数据
- 所有用户可以读取游戏数据（参考数据）

## 故障排除

### 如果迁移失败
1. 检查 Supabase 连接配置
2. 确保服务角色密钥有正确的权限
3. 检查数据库表是否已创建
4. 查看控制台错误信息

### 如果 API 返回错误
1. 确保新的 `gameService.ts` 被正确导入
2. 检查数据库连接
3. 验证游戏数据已正确迁移

## 回滚
如果需要回滚到硬编码数据库：
1. 在 `app/api/generate/route.ts` 中恢复对 `gameDatabase.ts` 的导入
2. 删除对数据库的依赖

但建议保持使用数据库版本，因为它提供了更好的可扩展性和性能。