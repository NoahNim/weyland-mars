import { Center, Divider, Box, HStack } from "@chakra-ui/react";
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
    <Center>
      <HStack spacing="950px">
        <Box bg={props.colorMode === "light" ? "white" : "black"}>
          {theNews ? theNews : ""}
        </Box>
        <Box bg={props.colorMode === "light" ? "white" : "black"}>
          {daysBulletins ? theBulletin : ""}
        </Box>
      </HStack>
    </Center>
  );
};

export default Information;
