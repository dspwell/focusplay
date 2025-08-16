const fs = require('fs');
const path = require('path');

// 需要修复的文件列表
const files = [
  'app/dashboard/page.tsx',
  'app/progress/page.tsx', 
  'app/home-client.tsx',
  'app/assessment/layout.tsx',
  'app/page.tsx',
  'app/api/admin/data/import/route.ts',
  'app/api/admin/data/export/route.ts',
  'app/api/admin/dashboard/route.ts',
  'app/api/admin/games/[gameId]/route.ts',
  'app/api/admin/games/route.ts',
  'app/api/analytics/route.ts',
  'app/api/achievements/route.ts',
  'app/api/progress/route.ts',
  'app/api/game-sessions/[sessionId]/steps/route.ts',
  'app/api/game-sessions/[sessionId]/route.ts',
  'app/api/game-sessions/route.ts'
];

// 计算相对路径
function getRelativePath(filePath, targetPath) {
  const fileDir = path.dirname(filePath);
  const depth = fileDir.split('/').length - 1; // app 目录深度
  const prefix = '../'.repeat(depth);
  return prefix + targetPath;
}

// 修复单个文件
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // 替换 @/components/* 
    content = content.replace(/from ['"]@\/components\//g, (match) => {
      modified = true;
      return `from '${getRelativePath(filePath, 'components/')}'`;
    });
    
    // 替换 @/lib/*
    content = content.replace(/from ['"]@\/lib\//g, (match) => {
      modified = true;
      return `from '${getRelativePath(filePath, 'lib/')}'`;
    });
    
    // 替换 @/hooks/*
    content = content.replace(/from ['"]@\/hooks\//g, (match) => {
      modified = true;
      return `from '${getRelativePath(filePath, 'hooks/')}'`;
    });
    
    // 替换 @/app/*
    content = content.replace(/from ['"]@\/app\//g, (match) => {
      modified = true;
      return `from '${getRelativePath(filePath, 'app/')}'`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ 修复了: ${filePath}`);
    }
  } catch (error) {
    console.log(`❌ 修复失败: ${filePath} - ${error.message}`);
  }
}

// 批量修复
console.log('🚀 开始批量修复路径问题...');
files.forEach(fixFile);
console.log('✅ 批量修复完成！');