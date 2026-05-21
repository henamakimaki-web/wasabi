export default function ReservationCTA() {
  return (
    <section
      id="reservation"
      className="scroll-mt-14 px-12 py-24 text-center"
      style={{ backgroundColor: "#f5f3ef" }}
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-red-900/30" />
          <p className="font-serif text-[10px] tracking-[0.5em] text-red-900/60 uppercase">
            Reservation
          </p>
          <div className="h-px w-12 bg-red-900/30" />
        </div>

        <h2 className="mb-4 font-serif text-2xl font-light tracking-[0.3em] text-zinc-800">
          ご予約・お問い合わせ
        </h2>
        <p className="mb-12 font-serif text-sm leading-[2.2] tracking-wider text-stone-500">
          人気店のため、ご来店前にご予約いただくことをおすすめいたします。
          <br />
          お電話のほか、下記のネット予約・掲載サイトからもお席のご案内が可能です。
        </p>

        <a
          href="tel:0936012021"
          className="mb-4 block font-serif text-3xl font-light tracking-[0.2em] text-red-950 transition-opacity hover:opacity-70"
        >
          093-601-2021
        </a>
        <p className="mb-10 font-serif text-[11px] tracking-[0.3em] text-stone-400">
          営業時間 18:00 〜 22:00（毎日）
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="https://autoreserve.com/ja/restaurants/RApyMSvwptxm9sdFcvqB"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-red-950 px-6 py-4 text-center font-serif text-[12px] tracking-[0.3em] text-white transition-colors duration-300 hover:bg-red-900 sm:w-auto sm:min-w-[200px]"
          >
            AutoReserveで予約
          </a>
          <a
            href="https://r.gnavi.co.jp/c4ege6st0000/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-red-950/40 px-6 py-4 text-center font-serif text-[12px] tracking-[0.3em] text-red-950 transition-colors duration-300 hover:bg-red-950 hover:text-white sm:w-auto sm:min-w-[200px]"
          >
            楽天ぐるなび
          </a>
          <a
            href="https://hitosara.com/0032008701/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-red-950/40 px-6 py-4 text-center font-serif text-[12px] tracking-[0.3em] text-red-950 transition-colors duration-300 hover:bg-red-950 hover:text-white sm:w-auto sm:min-w-[200px]"
          >
            ヒトサラ
          </a>
        </div>

        <a
          href="tel:0936012021"
          className="mt-6 inline-block font-serif text-[12px] tracking-[0.25em] text-stone-500 underline-offset-4 hover:text-red-950 hover:underline"
        >
          お電話でのご予約はこちら
        </a>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-red-900/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-red-900/30" />
          <div className="h-px w-12 bg-red-900/20" />
        </div>
      </div>
    </section>
  );
}
