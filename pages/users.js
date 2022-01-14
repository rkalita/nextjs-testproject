import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainContainer from '../components/MainContainer';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Users = ({ users }) => {
  const { t } = useTranslation('common');

  return (
    <MainContainer keywords={'users next js'}>
      <h1>{t('title')}</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  console.log(context);
  return {
    props: { users, ...(await serverSideTranslations(context.locale, ['common'])) },
  };
}
