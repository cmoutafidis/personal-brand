import Services from '../../../components/Services';
import Technologies from '../../../components/Technologies';
import Industries from '../../../components/Industries';
import Projects from '../../../components/Projects';

export default function EnglishPortfolioPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Services />
      <Technologies />
      <Industries />
      <Projects />
    </div>
  );
}