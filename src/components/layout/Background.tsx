export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background overflow-hidden pointer-events-none">
      {/* Subtle Grid Texture for premium technical feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Soft Radial Gradient Glow (Top Left - Primary Brand Color Accent) */}
      <div className="absolute left-0 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_400px_at_center,#3b82f612,transparent)]"></div>
      
      {/* Soft Radial Gradient Glow (Bottom Right - Soft White Accent) */}
      <div className="absolute right-0 bottom-0 -z-10 h-[1000px] w-[1000px] translate-x-1/3 translate-y-1/3 rounded-full bg-[radial-gradient(circle_400px_at_center,#ffffff05,transparent)]"></div>
    </div>
  );
}
