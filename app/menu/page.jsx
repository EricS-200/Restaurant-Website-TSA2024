import MenuCard from "@/components/MenuCard";
import appetizer1 from "@/public/menu/appetizer1.png";

export default function menu() {
  return (
    <main className="bg-gradient-to-b from-[#4c5a2b] to-[#64642b] relative w-full h-full">
      <div className="absolute w-full h-full bg-[url(/vegetable-bg-pattern.png)] bg-left-top bg-repeat bg-[length:500px] lg:bg-[length:600px] xl:bg-[length:700px]"></div>
      <section className="p-64 static">
        <MenuCard
          price={5.99}
          src={appetizer1}
          name="House Salad with Fresh Cherry Tomatoes"
          vegan={true}
          spice={0}
          type="side"
          description="A crisp medley of romaine and mixed greens tossed with sweet cherry tomatoes, crunchy cucumber slices, and a sprinkle of shredded carrots. Served with your choice of dressing, this salad is a refreshing start or complement to any meal."
        />
      </section>
    </main>
  );
}
