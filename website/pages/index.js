import Head from 'next/head';
import Info_Login from '../components/Info_Login';
import Info_Setup from '../components/Info_Setup';
import Info_Follow from '../components/Info_Follow';
import Info_Enjoy from '../components/Info_Enjoy';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vibez</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Info_Login />
      <Info_Setup />
      <Info_Follow />
      <Info_Enjoy />
    </div>
  );
}
