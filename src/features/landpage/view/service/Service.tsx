import { motion } from "framer-motion";
import { use } from "react";
import { FaBaby, FaHeart } from "react-icons/fa";
import { FiDroplet } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export const Service = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="w-100 flex-1">
        <motion.section className="w-full mt-28 flex flex-col items-center justify-center bg-cover bg-center relative">
          <div className=" bg-gray-100 w-100 flex flex-col items-center justify-center p-8">
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="text-4xl font-bold text-blue-500"
            >
              Church Service
            </motion.h2>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-700 mt-4 max-w-4xl text-center "
            >
              Our church offers a variety of uplifting services designed to
              nurture your faith and strengthen your community. From inspiring
              worship sessions to meaningful teaching, every service is an
              opportunity to connect with God and fellow believers. Whether you
              are celebrating milestones like marriage, child dedication, or
              baptism, or simply seeking spiritual guidance, our services are
              welcoming to everyone and aim to provide support, encouragement,
              and a sense of belonging. Join us and experience the warmth, love,
              and grace of our church family.
            </motion.p>
          </div>
        </motion.section>
        <motion.section
          id="location"
          initial={{ backgroundColor: "#f3f4f6", opacity: 0 }}
          whileInView={{
            backgroundColor: "#ffffff ", // Tailwind bg-gray-100
            opacity: 1,
            transition: { ease: "easeInOut", delay: 0.2 },
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
              {/* Marriage Service */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                  src="https://images.pexels.com/photos/8639632/pexels-photo-8639632.jpeg?cs=srgb&dl=pexels-melike-benli-8639632.jpg&fm=jpg"
                  alt="Marriage Service"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div>
                  <h2 className="text-3xl font-bold mb-4">Marriage</h2>
                  <p className="text-gray-600 text-lg">
                    Celebrate your love and commitment with our church’s
                    marriage service, where couples come together before God and
                    the community to exchange vows and receive blessings. Our
                    ceremony is designed to honor the sacred bond of marriage,
                    whether you envision an intimate gathering or a larger
                    celebration. With guidance and support every step of the
                    way, we help make your special day meaningful, joyful, and
                    filled with God’s grace.
                  </p>
                </div>
              </div>

              {/* Child Dedication Service */}
              <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Child Dedication</h2>
                  <p className="text-gray-600 text-lg">
                    Honor the gift of your child through our church’s child
                    dedication service. This meaningful ceremony gives parents
                    and guardians the opportunity to present their child before
                    God and the community, committing to nurture them in faith
                    and love. Surrounded by family, friends, and fellow church
                    members, your child receives prayers, blessings, and
                    guidance to grow in God’s grace. It’s a joyful occasion that
                    celebrates life, faith, and the promise of a bright
                    spiritual journey.
                  </p>
                </div>
                <img
                  src="https://i.pinimg.com/736x/b5/e6/f3/b5e6f34e928dfbf083ded8847e4f9b66--pictures-of-jesus-christian-quotes.jpg"
                  alt="Child Dedication Service"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Baptism Service */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                  src="https://th.bing.com/th?id=OIF.CQ4PiumOJJ%2bGEZxIs9JESg&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Water Baptism Service"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div>
                  <h2 className="text-3xl font-bold mb-4">Water Baptism</h2>
                  <p className="text-gray-600 text-lg">
                    Experience the transformative power of God through our water
                    baptism service. This sacred ceremony symbolizes a new
                    beginning, cleansing from sin, and a public declaration of
                    faith in Jesus Christ. Surrounded by family, friends, and
                    our church community, participants receive prayers,
                    blessings, and spiritual guidance as they take this
                    important step in their faith journey. Join us in
                    celebrating this joyous milestone and the commitment to a
                    life devoted to God.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

<section className="bg-gray-100 py-16">
  <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
    {/* Marriage Service */}
    <div
      className="rounded-lg border bg-white shadow-sm text-center animate-fade-in-up"
      style={{ animationDelay: "400ms" }}
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2 transform transition-all duration-500 hover:scale-110">
          <FaHeart className="h-8 w-8 text-blue-600" />
        </div>
        <div className="text-2xl font-semibold leading-none tracking-tight">
          Marriage
        </div>
      </div>
      <div className="p-6 pt-0">
        <p>
          Celebrate your love and commitment with our church’s marriage
          service. Couples exchange vows, receive blessings, and start
          their journey together in faith.
        </p>
      </div>
    </div>

    {/* Child Dedication Service */}
    <div
      className="rounded-lg border bg-white shadow-sm text-center animate-fade-in-up"
      style={{ animationDelay: "500ms" }}
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2 transform transition-all duration-500 hover:scale-110">
          <FaBaby className="h-8 w-8 text-blue-600" />
        </div>
        <div className="text-2xl font-semibold leading-none tracking-tight">
          Child Dedication
        </div>
      </div>
      <div className="p-6 pt-0">
        <p>
          Dedicate your child to God in a meaningful ceremony with
          prayers, blessings, and guidance from our church community.
        </p>
      </div>
    </div>

    {/* Water Baptism Service */}
    <div
      className="rounded-lg border bg-white shadow-sm text-center animate-fade-in-up"
      style={{ animationDelay: "600ms" }}
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2 transform transition-all duration-500 hover:scale-110">
          <FiDroplet className="h-8 w-8 text-blue-600" />
        </div>
        <div className="text-2xl font-semibold leading-none tracking-tight">
          Water Baptism
        </div>
      </div>
      <div className="p-6 pt-0">
        <p>
          Publicly declare your faith in Jesus Christ through water
          baptism, symbolizing a fresh start and spiritual renewal.
        </p>
      </div>
    </div>
  </div>
</section>

        <motion.section
          initial={{ backgroundColor: "#ffffff", opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { ease: "easeInOut", delay: 0.2 },
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="py-16 bg-white text-black"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              We invite you to be a part of our church family. Come worship with
              us and experience the love of Christ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-400 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-full px-8"
                onClick={() => {
                  navigate("/landpage/beoneofus/waterbaptism");
                }}
              >
                Become a Member
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};
