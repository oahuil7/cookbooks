import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  HotCateWrap,
  H1Container
} from './StyledCookBook';
import { Grid } from 'antd-mobile'

const hotCateListData = [
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2015/09/16/c640_201509161442371783820.jpg?x-oss-process=style/c320",
    "title": "家常菜"
  },
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2018/11/20/2018112015426906295309702111.jpg?x-oss-process=style/c320",
    "title": "汤"
  },
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2015/01/05/c640_201501051420460072724.jpg?x-oss-process=style/c180",
    "title": "川菜"
  },
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2018/04/24/20180424152455529414313.jpg?x-oss-process=style/c180",
    "title": "粤菜"
  },
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2018/04/24/20180424152455503391713.jpg?x-oss-process=style/c180",
    "title": "早餐"
  },
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2017/07/31/20170731150146877350813.jpg?x-oss-process=style/c320",
    "title": "火锅"
  },
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2018/04/24/20180424152456373531113.jpg?x-oss-process=style/c180",
    "title": "素菜"
  },
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2015/01/21/c640_201501211421826764156.jpg?x-oss-process=style/c180",
    "title": "粥"
  },
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2017/10/11/20171011150770405975413.jpg?x-oss-process=style/c180",
    "title": "凉菜"
  },
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2018/04/25/20180425152464324522913.jpg?x-oss-process=style/c180",
    "title": "烘焙"
  },
  {
    "img": "https://i3.meishichina.com/attachment/recipe/2015/07/27/c640_201507271437975925472.jpg?x-oss-process=style/c180",
    "title": "饮品"
  }
]

const HotCate = () => {
  const [ColumnNum, setColumnNum] = useState(4)
  const [HotCateList] = useState(hotCateListData)
  const history = useHistory()

  useEffect(() => {
    let width = window.innerWidth
    if (width < 375) {
      setColumnNum(3)
    }
  }, [])

  const handleClick = useCallback(
    ({title}) => {
      history.push('/list', { title, from: '/home' })
    },
    [history],
  )

  return (
    <HotCateWrap>
      <H1Container
        width="0 0 1px 0"
      >热门分类</H1Container>
      <Grid data={HotCateList}
        columnNum={ColumnNum}
        hasLine={false}
        renderItem={dataItem => (
          <div className="grid-item">
            <img src={dataItem.img} alt="" />
            <div>
              <span>{dataItem.title}</span>
            </div>
          </div>
        )}
        onClick={handleClick}
      />
    </HotCateWrap>
  );
}

export default HotCate;