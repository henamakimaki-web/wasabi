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
          ご来店前にご予約いただくことをおすすめいたします。
          <br />
          お電話にてお席のご案内・お問い合わせを承ります。
        </p>

        <a
          href="tel:08027961533"
          className="mb-4 block font-serif text-[clamp(1.35rem,7.5vw,1.875rem)] font-light tracking-[0.15em] text-red-950 transition-opacity active:opacity-70 sm:tracking-[0.2em]"
        >
          080-2796-1533
        </a>
        <p className="mb-10 font-serif text-[11px] tracking-[0.3em] text-stone-400">
          営業時間 19:00 営業開始
        </p>

        <a
          href="tel:08027961533"
          className="inline-flex min-h-[48px] items-center justify-center bg-red-950 px-6 py-3 font-serif text-[12px] tracking-[0.22em] text-white transition-colors active:bg-red-900 sm:min-w-[200px] sm:tracking-[0.3em] sm:hover:bg-red-900"
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
