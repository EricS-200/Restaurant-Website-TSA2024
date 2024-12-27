import MenuCard from "@/components/MenuCard";
import appetizer1 from "@/public/menu/appetizer1.png";

export default function menu() {
  return (
    <div className="">
      <section className="p-64 bg-gray-300">
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
    </div>
  );
}
