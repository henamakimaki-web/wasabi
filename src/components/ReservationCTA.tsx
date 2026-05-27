import { demoStore } from "@/data/demoStore";

export default function ReservationCTA() {
  return (
    <section
      id="reservation"
      className="scroll-mt-14 px-4 py-12 text-center sm:px-8 sm:py-16 lg:px-12 lg:py-24"
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

        <p
          className="mb-4 font-serif text-[clamp(1.35rem,7.5vw,1.875rem)] font-light tracking-[0.15em] text-red-950 sm:tracking-[0.2em]"
        >
          {demoStore.phone}
        </p>
        <p className="mb-10 font-serif text-[11px] tracking-[0.3em] text-stone-400">
          営業時間 {demoStore.hoursShort}（{demoStore.hoursNote}）
        </p>

        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <button
            type="button"
            className="flex min-h-[48px] w-full cursor-default items-center justify-center bg-red-950 px-4 py-3 text-center font-serif text-[12px] tracking-[0.22em] text-white sm:w-auto sm:min-w-[200px] sm:px-6 sm:tracking-[0.3em]"
          >
            AutoReserveで予約（デモ）
          </button>
          <button
            type="button"
            className="flex min-h-[48px] w-full cursor-default items-center justify-center border border-red-950/40 px-4 py-3 text-center font-serif text-[12px] tracking-[0.22em] text-red-950 sm:w-auto sm:min-w-[200px] sm:px-6 sm:tracking-[0.3em]"
          >
            楽天ぐるなび（デモ）
          </button>
          <button
            type="button"
            className="flex min-h-[48px] w-full cursor-default items-center justify-center border border-red-950/40 px-4 py-3 text-center font-serif text-[12px] tracking-[0.22em] text-red-950 sm:w-auto sm:min-w-[200px] sm:px-6 sm:tracking-[0.3em]"
          >
            ヒトサラ（デモ）
          </button>
        </div>

        <button
          type="button"
          className="mt-6 cursor-default font-serif text-[12px] tracking-[0.25em] text-stone-500"
        >
          お電話でのご予約はこちら
        </button>

        <p className="mt-8 font-serif text-[11px] leading-relaxed tracking-wide text-stone-400">
          ※電話番号・予約リンクはデモ用の架空情報です
        </p>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-red-900/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-red-900/30" />
          <div className="h-px w-12 bg-red-900/20" />
        </div>
      </div>
    </section>
  );
}
