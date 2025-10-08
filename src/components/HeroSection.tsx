import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-16 bg-gradient-to-b from-white to-white"
  style={{
    background: "linear-gradient(90deg, rgba(223, 223, 223, 1) 0%, rgba(29, 253, 253, 0.24) 85%)"
  }}
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 md:gap-10 gap-12 items-center">
        <div>
          <h1 className="text-4xl/3 md:text-5xl/snug font-bold mb-6 text-textPrimary leading-relaxed">
            Enterprise Risk Management <br /> Simplified
          </h1>
          <img src="Vector 32.png" alt="" className="md:h-7 md:w-45 h-3 w-35 mb-9"/>
          <p className="text-gray-600 mb-6">
            Move beyond spreadsheets with a unified, AI-powered platform that
            identifies, assesses, and mitigates risks in real time. Empower your
            teams with actionable insights, seamless collaboration, and complete
            regulatory compliance.
          </p>
          <Button className="btn-primary text-white">Request a demo</Button>
        </div>

        <div className="flex justify-center">
          <img
            src="Customer Development.svg"
            alt="Illustration"
            className="w-80 md:w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
