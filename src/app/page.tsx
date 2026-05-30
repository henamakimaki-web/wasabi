import Access from "@/components/Access";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import ReservationCTA from "@/components/ReservationCTA";
import Rooms from "@/components/Rooms";
import Scenes from "@/components/Scenes";
import SiteShell from "@/components/SiteShell";
import WelcomeMessage from "@/components/WelcomeMessage";

export default function Home() {
  return (
    <SiteShell>
      <div className="pt-14">
        {/* ① トップ / ファーストビュー */}
        <Hero />

        {/* ② ご挨拶・お店について */}
        <WelcomeMessage />

        {/* ③ コンセプト・特徴 */}
        <Features />

        {/* ④ お料理・メニュー */}
        <Menu />

        {/* ⑤ クチコミ */}
        <Rooms />

        {/* ⑥ ご利用シーン */}
        <Scenes />

        {/* ⑦ 店舗情報・アクセス */}
        <Access />

        {/* ⑧ ご予約・お問い合わせ */}
        <ReservationCTA />
      </div>
    </SiteShell>
  );
}
