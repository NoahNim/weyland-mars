import { Center, Divider, Box, HStack } from "@chakra-ui/react";
import { useMemo } from "react";
import News from "./News";
import Bulletin from "./Bulletin";

const Information = (props) => {
  const daysNews = useMemo(() => {
    let info = props.important.filter((infoType) =>
      infoType.type === "news" ? props.important : ""
    );

    if (info) {
      return info.map((news) => (
        <Center key={news.id}>
          <News
            date={news.date}
            type={news.type}
            from={news.from}
            title={news.title}
            content={news.content}
          />
        </Center>
      ));
    }
  }, [props.important]);
  const daysBulletins = useMemo(() => {
    let info = props.important.filter((infoType) =>
      infoType.type === "bulletin" ? props.important : ""
    );

    if (info) {
      return info.map((news) => (
        <Center key={news.id}>
          <Bulletin
            date={news.date}
            type={news.type}
            from={news.from}
            title={news.title}
            content={news.content}
          />
        </Center>
      ));
    }
  }, [props.important]);

  return (
    <Center>
      <HStack spacing="15px" margin="20px">
        <Box
          bg={
            props.colorMode === "light"
              ? "rgb(150, 219, 236)"
              : "rgb(83, 79, 192)"
          }
          borderRadius="6px"
          h="810px"
          w="850px"
        >
          News
          {daysNews ? daysNews : ""}
        </Box>
        <Box
          bg={
            props.colorMode === "light"
              ? "rgb(150, 219, 236)"
              : "rgb(83, 79, 192)"
          }
          borderRadius="6px"
          h="810px"
          w="835px"
        >
          Bulletin
          {daysBulletins ? daysBulletins : ""}
        </Box>
      </HStack>
    </Center>
  );
};

export default Information;
