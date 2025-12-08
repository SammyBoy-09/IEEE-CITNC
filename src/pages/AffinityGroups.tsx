import Header from "@/components/Header";
import DecorativeAnimations from "@/components/DecorativeAnimations";
import AffinityGroups from "@/components/AffinityGroups";

const AffinityGroupsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <DecorativeAnimations />
      <Header />
      <main>
        <AffinityGroups />
      </main>
      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 IEEE Student Branch, Cambridge Institute of Technology North Campus.</p>
        </div>
      </footer>
    </div>
  );
};

export default AffinityGroupsPage;
