import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {QQHY_LINK,WXHY_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = '小明出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '作者QQ',
          href: QQHY_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '作者微信',
          href: WXHY_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> 小明 GitHub</>,
          href: 'https://github.com/XiaoYanxuanzi',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
