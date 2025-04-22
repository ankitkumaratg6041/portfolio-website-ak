import Intro from "@/components/intro"
import NewsletterForm from "@/components/newsletter-form"
import RecentPosts from "@/components/recent-posts"
import RecentProjects from "@/components/recent-projects"

const Home = () => {

  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <NewsletterForm />
      </div>
    </section>
  )
}

export default Home