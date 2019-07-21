import Mock from 'mockjs'

// TODO 假数据
let houseList = [
  {
    id: 1001,
    title: '阳光凡尔赛宫 餼室龤厅龒卫 次卧 南',
    rentMode: 1, // 整租：1， 合租：2
    area: 108, // 房屋面积
    houseType: {
      bedRoom: 1, // 室
      livingRoom: 1, // 厅
      bathRoom: 1 // 卫
    },
    rentPrice: 1200, // 租金
    description: '台江万达正对面，金融街<br>交通方便，高档小区<br>房东阿姨仅剩一间空房，鸺餼龤特价出租啦<br>诚意满满，非诚勿扰，直接电联刘阿姨', // 房屋描述
    houseImgList: [
      'https://pic1.ajkimg.com/display/anjuke/dddd17d568ceffa586bd4c4dbd9cd002/750x450c.jpg',
      'https://pic1.ajkimg.com/display/anjuke/0f37bf882dd4b4ce390990a77213e52c/750x450c.jpg',
      'https://pic1.ajkimg.com/display/anjuke/92bf4e51629bb74debba55c6f5d903d0/750x450c.jpg',
    ]
  },
  {
    id: 1002,
    title: '保利香槟国际居家风独门独户单身公寓中楼层驋餼龤龤随时看房',
    rentMode: 2,
    area: 45,
    houseType: {
      bedRoom: 1,
      livingRoom: 1,
      bathRoom: 1
    },
    rentPrice: 3500,
    description: '租房只找我请认准东泰禾盈创世纪房产小陈为您服务<br>本人餼年房产经验：专注晋安区东泰禾广场一带出租套房，单间，写字楼。办公场地，售让<br>其中为专业的是我们的单间， 套房，基本上，您觉得不好找的房子，只要您的一通电话，便能够当天为您找到称心如意的房子，因为专业所以省心。以为安全，所以放心。 <br>相识是缘，相知是情。 见面三分情，本人是本地人，您刚到福州，可以不用担心人生地不熟。因为此刻起，咱两就已经是朋友啦。*是我*的爱好。我会用真诚 人情 亲切 信用 来用心服务您。 <br>本人带你所看的房子真实有效，安全无烦恼。从您给我打的*通电话开始，您找对人了。<br>本人小陈经营范围;晋安区 东二环泰禾广场写字楼 保利香槟国际 香开新城 岳峰新城 鹤林新城<br>房源情况<br>设齐：冰箱、空调、洗衣机、热水器、床铺、衣柜、油烟机。 全新<br>小区情况<br>小区的绿化率高达驋龤%，物业管理非常的好，人车分流。<br>交通状况<br>环路 二至三环<br>公共交通 <br>岳峰,二化,三角池,三八路口<br>轨道交通 无<br>自驾路况 从五一广场出发，途经五一北路、塔头路，进入连江北路左转一直开即到。<br>公交;二环路、保利香槟国际站下车。<br>周边配套<br>银行 中国农业银行福州二化分理处,中国建设银行福州东站分理处<br>餐饮店 大鸣新洁快餐馆,华莱士连江北路店,金晖茶仙居,煲宝仔菜馆岳峰南路店<br>菜市场 岳峰菜市场,溪口菜市场<br>幼儿园 朵朵幼儿园,金蕾鹤林幼儿园<br>小学 晋安一小,竹屿小学,岳峰中心小学<br>中学 福州第十中学,福州第三十二中学<br>医院 福建中医药大学附属第二人民医院二化分院,海福手外科医院,闽江医院<br>诊所 天安诊所,丽萍诊所<br>药店 康利又来药店,安泰医药商店<br>商店 东二环泰禾广场<br>超市 万嘉生鲜超市二化店,永辉超市<br>便利店 恩盛隆超市,利家福超市<br>公园 晋安河公园,金鸡山公园<br>体育馆 福建省体育中心<br>其他 福州金鸡山速齤酒店<br>中介是收您房租首月的餼龤%，服务金不打折， 小陈竭诚为您服务<br>温馨提示：中介金乃企业生存之本，如若不想付费用，可自行寻找', // 房屋描述
    houseImgList: [
      'https://pic1.ajkimg.com/display/anjuke/d43ddd6e00fae39c9d76cc046b4a329c/420x315c.jpg',
      'https://pic1.ajkimg.com/display/anjuke/059c40e54c27011771c499f412f51e88/420x315c.jpg',
      'https://pic1.ajkimg.com/display/anjuke/681eb5d25e9412e429cd6e6efecb4e40/420x315c.jpg',
    ]
  }
]

// TODO get请求
Mock.mock('/house/list', 'get', {
  data: houseList
})
// TODO 可参考代码
// Mock.mock('/order', 'get', (options) => {
//   let res = userOrder.map(ele => {
//     const detail = productList.find(product => String(product.id) === String(ele.productId))
//     ele.title = detail.title
//     ele.describe = detail.describe
//     return ele
//   })
//   return res
// })

// TODO post请求
Mock.mock('/publish', 'post', (res, req) => {
  let _newHouse = {
    ...JSON.parse(res.body)
  }
  houseList.push(_newHouse)
  return houseList
})


