import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function checkTableStructure() {
  try {
    // 查看games表的结构
    const { data: games } = await supabase.from('games').select('*').limit(1);
    
    if (games && games.length > 0) {
      console.log('games表字段结构:');
      console.log(Object.keys(games[0]));
      console.log('\n示例数据:');
      console.log(games[0]);
    } else {
      console.log('games表中没有数据');
    }
  } catch (error) {
    console.error('检查表结构失败:', error);
  }
}

checkTableStructure().catch(console.error);