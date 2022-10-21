import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';
import { CheckBox, CreatedTime, RichText, Title } from 'types/NotionTypes';
import { getFullYmdStr } from 'utils/getDate';

export const getNotionCards = async ({
  queryKey,
}: QueryFunctionContext<string[]>) => {
  try {
    const { data } = await axios.get(
      `https://gomawa.juniorboard.workers.dev/api/search?category=title&argument=${queryKey[1]}`,
    );
    const results = data.results.map(
      (item: {
        id: string;
        properties: {
          createAt: CreatedTime;
          description: RichText;
          from: RichText;
          reveal: CheckBox;
          title: Title;
          to: RichText;
        };
      }) => {
        const { createAt, description, from, reveal, title, to } =
          item.properties;

        return {
          id: item.id,
          createAt: getFullYmdStr(createAt.created_time),
          description: richTextCombine(description),
          from: richTextCombine(from),
          reveal: reveal.checkbox,
          title: title.title[0].plain_text,
          to: richTextCombine(to),
        };
      },
    );
    return results;
  } catch (error) {
    return error;
  }
};

const richTextCombine = ({ rich_text }: RichText) => {
  const plainTextArray = rich_text.map((item: { plain_text: string }) => {
    return item.plain_text;
  });
  return plainTextArray.join();
};
