# 反和谐

反和谐分为**模型反和谐**和**图标反和谐**两部分。

## 模型反和谐

模型反和谐是指还原游戏中的模型，比如亡灵还原为骷髅，尸体的墓碑还原为骷髅。

方法如下：

用记事本打开**Config.wtf**文件，在最后加上如下语句。
```
SET overrideArchive "0"
```
**Config.wtf**文件路径为**World of Warcraft/retail/WTF/Config.wtf**。

## 图标反和谐

图标反和谐是指将物品和技能的图标还原，比如还原DK灵界打击的图标。

图标反和谐的原理是用自定义的图标来替换游戏内的图标。

方法如下（以DK的技能**灵界打击**为例）：

1. 下载原版图标图片。(此处介绍从fandom网站下载图片的方法，也可以从其他途径获取图片)

   点击该[链接](https://wowwiki.fandom.com/wiki/)访问fandom网站。
   
   若知道技能英文名称，直接在顶部搜索框中搜索技能的英文名称，如灵界打击为**Death Strike**，之后进入下图所示的技能详情页面。
   
   若不知道技能英文名称，可以先进入相应职业的页面，之后在职业页面中找到相应技能。例如先在Classes分类中找到**Death Knight**，然后在**Death Knight**页面中找到技能。
   
   点击下图红圈位置打开**技能图标**。
   
   ![death_strike_detail](./test/death_strike_detail.png)
   
   点击下图红圈位置打开**技能图标原图**。
   
   ![death_strike_original](./test/death_strike_original.png)
   
   点击鼠标右键，选择**图片另存为**，保存该图片。
   
   ![death_strike_original](./test/save_image.png)
   

2. 将图片文件格式转换为blp。(此处介绍用**BLPNG Converter**转换的方法，也可以用其他方式转换)

   打开图片格式转换工具**BLPNG Converter**，将下载的图片拖到红圈位置，转换就会自动开始。
   
   ![blpng](./test/blpng.png)
   
   提示转换完成之后会在**与图片相同的路径下**生成blp文件。


3. 将blp文件重命名，并放入正确路径。

   将文件名第一个字母**S**从大写改为小写。例如从**Spell_deathknight_butcher2.blp**改为**spell_deathknight_butcher2.blp**。
   
   放入**World of Warcraft/_retail_/Interface/Icons**目录下。(若没有**Icons**文件夹就手动新建文件夹，并命名为**Icons**)
