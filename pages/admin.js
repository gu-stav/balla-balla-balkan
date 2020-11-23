import dynamic from 'next/dynamic';

import config from '../lib/admin/config';

const CMS = dynamic(
  () => import('netlify-cms-app').then((cms) => {
    cms.init({ config });
  }),
  { ssr: false, loading: () => <p>Loading...</p> },
);

const AdminPage = () => <CMS />;

export default AdminPage;
