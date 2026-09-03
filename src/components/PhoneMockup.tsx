export default function PhoneMockup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`aspect-[9/19] w-full max-w-[260px] rounded-[2.5rem] border-[6px] border-ink bg-white shadow-2xl overflow-hidden shrink-0 ${className}`}
    >
      <div className="h-6 w-full bg-white flex items-center justify-center">
        <div className="h-1.5 w-16 bg-ink/15 rounded-full" />
      </div>
      <div className="h-[calc(100%-1.5rem)] overflow-hidden">{children}</div>
    </div>
  );
}