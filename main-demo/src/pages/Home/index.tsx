import Guide from '@/components/Guide';
import { MicroApp } from 'umi';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      {/* <MicrosApp name="curry-fe-child" /> */}
    </PageContainer>
  );
};

export default HomePage;