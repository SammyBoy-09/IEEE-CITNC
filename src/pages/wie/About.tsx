import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-purple-100 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6 border border-purple-200">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600 flex-shrink-0" />
            <span className="text-purple-600 text-xs sm:text-sm font-medium leading-tight">About WIE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2 leading-tight">
            WHO WE ARE
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 sm:mb-8 px-2 leading-relaxed">
            Empowering Women Engineers. Building Leaders. Shaping the Future.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 sm:mb-8" />
        </div>
        
        <div className="max-w-4xl mx-auto">
      <p className="text-sm text-muted-foreground mb-4">
        IEEE Women in Engineering (WIE) is one of the world’s largest international professional organizations dedicated to inspiring, supporting, and empowering women engineers, scientists, and technologists across all disciplines. As a global network within IEEE, WIE works to promote women’s participation in STEM fields, encourage leadership, and foster an inclusive environment where innovation can thrive.
      </p>
      
      <p className="text-sm text-muted-foreground mb-4">
        Across IEEE Student Branches, WIE affinity groups have become vibrant hubs of learning. They create safe, inclusive, and supportive environments where every member feels valued and inspired. Student branches frequently conduct orientation programs, technical festivals, expert talks, competitions, and career guidance sessions under the banner of WIE. These activities not only build technical strength but also shape leadership qualities and teamwork. The impact of WIE can be seen across universities, industries, research institutions, government sectors, and global communities. By transforming aspirations into achievements, WIE contributes to the growth of technology and society as a whole.
      </p>

      <p className="text-sm text-muted-foreground mb-4">
        IEEE WIE believes that when women thrive in engineering, the world thrives. Innovation becomes richer, solutions become more inclusive, and the future becomes brighter.
      </p>

        <p className="text-sm text-muted-foreground mb-4">
          Through workshops, mentorship programs, technical sessions, outreach activities, and networking events, IEEE WIE helps members enhance their professional skills, connect with experts, and contribute to advancing technology for humanity. The community also plays a major role in motivating the next generation of girls to pursue careers in engineering and technology.
        </p>
        </div>
      </div>
    </section>
  );
};

export default About;
