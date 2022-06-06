import { Center, Divider, Box } from "@chakra-ui/react";
import { useState } from "react";
import News from "./News";
import Bulletin from "./Bulletin";

const Information = (props) => {
  const [daysNews, setDaysNews] = useState(
    props.important.filter((infoType) => infoType.type === "news")
  );
  const [daysBulletins, setDaysBulletins] = useState(
    props.important.filter((infoType) => infoType.type === "bulletin")
  );

  console.log(daysBulletins);
  console.log(daysNews);

  let theBulletin = daysBulletins.map((info) => (
    <Center key={info.id}>
      <Bulletin
        date={info.date}
        type={info.type}
        from={info.from}
        title={info.title}
        content={info.title}
      />
    </Center>
  ));

  let theNews = daysNews.map((info) => (
    <Center key={info.id}>
      <News
        date={info.date}
        type={info.type}
        from={info.from}
        title={info.title}
        content={info.title}
      />
    </Center>
  ));

  const todaysInfo = props.important.filter((infoType) =>
    infoType.type === daysNews.type ? daysNews : daysBulletins
  );

  return (
    <Box>
      <Center>
        {daysNews ? theNews : ""}
        {daysBulletins ? theBulletin : ""}
      </Center>
    </Box>
  );
};

export default Information;
