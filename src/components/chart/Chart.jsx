import React, { useEffect, useState } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
} from "recharts";
import records from "./db.json"
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";

export default function Chart() {
  const [date, setdate] = useState([])
  const [month, setmonth] = useState()
  const [showcard, setShowCard] = useState(false)
  const [cardData, setCardData] = useState([])


  useEffect(() => {
    const sliceddata = () => {
      const settingdate = records.map(data => {
        const position = data['Date_of_Purchase'].indexOf('/')
        return data['Date_of_Purchase'].slice(0, position)
      })
      setdate(settingdate)
    }
    sliceddata()
  }, [])

  useEffect(() => {
    const findmonth = () => {
      let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      let array = []
      for (var i = 1; i <= 12; i++) {
        let convertData = i.toString()
        let filteredval = date.filter(x => x === convertData).length
        array.push({
          count: filteredval, month: months[i - 1], monthnumber: i
        })
      }
      setmonth(array)
    }
    findmonth()
  }, [date])

  const showCards = (e) => {
    const card = records.filter(data => {
      const position = data['Date_of_Purchase'].indexOf('/')
      return data['Date_of_Purchase']
      // eslint-disable-next-line
      .slice(0, position) == e
      .payload.monthnumber
    })
    console.log(card)
    if (card) {
      setShowCard(true);
      setCardData(card)
    }
  }

  return (
    <>
      <Navbar />
      <div sx={{ marginTop: '2vh' }} className="center">
        <h1>Chart</h1>
        <div style={{ margin: "3rem auto" }}>
          <ComposedChart className="charts"
            width={1000}
            height={400}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }} data={month}>
            <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            {/* <Area type="monotone" dataKey="collision" fill="#8884d8" stroke="#8884d8" /> */}
            <Bar dataKey="count" barSize={20} fill="#413ea0" onClick={e => showCards(e)} />
            {/* <Line type="monotone" dataKey="Premium" stroke="#ff7300" /> */}
          </ComposedChart>
        </div>
      </div>

      <div>
        {showcard && <Search search={false} data={cardData}/>}
      </div>
    </>
  );
}