# This data can is loaded with the rails db:seed command (or with db:setup).

# rubocop:disable Metrics/LineLength

site = Site.where(domain: 'basicman.co').first_or_create do |s|
  s.name = 'Basic Man'
end.tap do |s|
  s.update(
    name: 'Basic Man',
    domain: 'basicman.co',
    subtitle: 'Everyday Essentials',
    homepage_image: File.new(Rails.root.join('app', 'assets', 'images', 'hero.jpg')),
  )
end

hair = Category.where(slug: 'hair', site: site).first_or_create.tap do |category|
  category.update(
    name: 'Hair',
    slug: 'hair',
    site: site,
    order: 1,
    description: %(
    <p>
      Hair basics like shampoo and conditioner help clean and protect your hair.
      To define your personal look, choose a pomade, putty, or wax.
    </p>
    ).strip,
  )
end

beard = Category.where(slug: 'beard', site: site).first_or_create.tap do |category|
  category.update(
    name: 'Beard',
    slug: 'beard',
    site: site,
    order: 2,
    description: %(
    <p>
      Regardless of your personal beard preferences, here are a variety of essentials to care for your facial hair.
      If you prefer a clean-shaven look, be sure to check out a <a href="/safety-razor">safety razor</a> for an upgrade from a cartridge razor.
      Men who do grow and style their beards can also benefit from a safety razor to define a clean edge between beard and cheek.
      Additionally, a <a href="/beard-trimmer">beard trimmer</a> can be indispensable for maintaining a uniform length and fading into the neck.
    </p>

    <p>
      You also have another choice: shaving soap or shaving cream.
      <a href="/shaving-soap">Shaving soap</a> provides a luxurious lather that conditions skin and does not leave an overpowering scent.
      <a href="/shaving-cream">Shaving cream</a> is more convenient and easier to produce a lather.
      You should avoid shaving gel or aerosolized products as they are prone to create air pockets, leading to nicks and cuts.
    </p>

    <p>
      <a href="/beard-oil">Beard oil</a> also helps keep your facial healthy and nourished.
      Be sure to check out our <a href="/#style">style section</a> as well for aftershave.
    </p>
    ).strip,
  )
end

skin = Category.where(slug: 'skin', site: site).first_or_create.tap do |category|
  category.update(
    name: 'Skin',
    slug: 'skin',
    site: site,
    order: 3,
    description: %(
    <p>
      Your skin is the largest organ in your body, and as such it should be treated with care.
      Below are several products that will clean, moisturize, and protect your skin and guard against the damage of aging.
    </p>
    ).strip,
  )
end

teeth = Category.where(slug: 'teeth', site: site).first_or_create.tap do |category|
  category.update(
    name: 'Teeth',
    slug: 'teeth',
    site: site,
    order: 4,
    description: %(
    <p>
      Proper care of your mouth and teeth is essential for your long-term health in addition to how others perceive you.
    </p>
    ).strip,
  )
end

style = Category.where(slug: 'style', site: site).first_or_create.tap do |category|
  category.update(
    name: 'Style',
    slug: 'style',
    site: site,
    order: 5,
    description: %(
    <p>
      These items help define your personal style and the way you are perceived by others, from cologne to fashion accessories.
    </p>
    ).strip,
  )
end

skills = Category.where(slug: 'skills', site: site).first_or_create.tap do |category|
  category.update(
    name: 'Skills',
    slug: 'skills',
    site: site,
    order: 6,
    description: %(
    <p>
      Looking to branch out beyond essentials?
      Here are several books (and a pack of <a href="/playing-cards">playing cards</a>) in a variety of topics.
      From food, wine, and cocktails, to photography, repair, and mindfulness, these skills aren't necessarily male-only, but there is something especially stylish and attractive about a well-educated man.
    </p>

    <p>
      Also, check out <a href="/grooming-book">Manmade</a>, a guide to mens skincare and grooming that pairs well with the essentials above.
    </p>
    ).strip,
  )
end

Product.where(category: hair, slug: 'shampoo', site: site).first_or_create.update(
  name: 'Shampoo',
  slug: 'shampoo',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'shampoo.jpg')),
  asin: 'B0040TJ7B0',
  offer_id: '3pmJjiB%2Bqw3Qcfwy8VQESSU0C7%2B3JKrWG%2Bcyc%2FG7%2F0koG%2BdkW5I0W1sgflp3%2BHCKdnpKYS%2FGlUTmg0axHq2M9f6Avp9EgP%2FeS2Zr4LQMJftKq7hLwqu3nA%3D%3D',
  price: 8.99,
  description: %(
  <p>Designed specifically for men, this shampoo provides cleansing with essential nutrients to effectively clean the hair and scalp.  Creates fullness and thickness without adding weight.</p>
  ).strip,
  why: %(
  <ul>
    <li>Works well on a variety of hair types</li>
    <li>Pleasant but not overpowering scent</li>
    <li>Effective at cleaning scalp in addition to hair</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Pair this with our <a href="/conditioner">conditioner</a> for complete hair care</li>
  </ul>
  ),
)

Product.where(category: hair, slug: 'conditioner', site: site).first_or_create.update(
  name: 'Conditioner',
  slug: 'conditioner',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'conditioner.jpg')),
  asin: 'B0045IYEDC',
  offer_id: '2jj4Phr%2Fe6SVEPQDkOYn8zO%2FSIOsulwfA7Z%2F7KzTw1V%2F68GKAgW3ROdn7V5YKlJO4KgHthOt1IFfxIT4mdauRCVFLHAySkSYhei9T86cy4LvnNchlrWG0g%3D%3D',
  price: 10.49,
  description: %(
  <p>Rich treatment with botanicals to condition hair - hair is left soft, shiny, and manageable.</p>
  ).strip,
  why: %(
  <ul>
    <li>Crisp, clean finish</li>
    <li>Effectively detangles hair and refreshes scalp</li>
    <li>Promotes hair health and leaves it manageable for styling</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use after every wash with our <a href="/shampoo">shampoo</a></li>
  </ul>
  ),
)

Product.where(category: hair, slug: 'pomade', site: site).first_or_create.update(
  name: 'Pomade',
  slug: 'pomade',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'pomade.jpg')),
  asin: 'B016OXP13M',
  offer_id: 'logiwNtxobsAHvCrq2GBJdTcFvSnmH9WAEvoB5%2BY1JN3xH%2BVofyJFUn3NqrbcGzz1YWoy7jnDfxC%2B2eJIQ050wBeIJqCu9gpl1KIe0tYUcFGPnJ2axJDg8sNgVtEmX%2BND8cWn4vhwyNT%2BMrk7GJlsO%2FDdVZWwA02',
  price: 20.0,
  description: %(
  <p>Oil-based pomade, made without petroleum, helps you look good and keep your hair nourished and healthy.</p> <p><strong>Ingredients:</strong> Hydrogenated Castor Oil, Soy Wax, Candelilla Wax, Jojoba Oil, Essential Oils
  ).strip,
  why: %(
  <ul>
    <li>Spot-on hold, scent, shine</li>
    <li>Ingredients that are good for your hair and scalp</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Pomade has a medium shine (more than <a href="/hair-wax">wax</a> or <a href="/hair-putty">putty</a>) - use when you want a sleek and trim look</li>
    <li>Apply to damp or dry hair</li>
    <li>Remove with a dry towel (this is easier than soap and water)</li>
  </ul>
  ),
)

Product.where(category: hair, slug: 'hair-putty', site: site).first_or_create.update(
  name: 'Putty',
  slug: 'hair-putty',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'hair-putty.jpg')),
  asin: 'B00JRFKT9G',
  offer_id: 'et8WnFTb3QzFYGkxSCpkyk7XhzleGYlpO6ApJijkBjHiuJ48eywhgS91bEVJIjB0jtEjdsSmJkZY6xs5X%2FCX9sJy%2BdV0Ee4i7zrtSGMrWJEB69Z4Oe7pn4NIB7qbGrOepFb9lU%2Bhntb%2BkCz1vie48Q%3D%3D',
  price: 21.0,
  description: %(
  <p>Smooth and creamy, this putty will give your hair that all-important matte finish and second day texture from day one.</p>
  ).strip,
  why: %(
  <ul>
    <li>Strong hold, but doesn\'t look greasy</li>
    <li>Lasts all day</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Putty has a matte, messy look (unlike <a href="/pomade">pomade</a> with a sleek look or <a href="/hair-wax">wax</a> with a no-product look)</li>
    <li>Apply to dry or damp hair near the roots</li>
    <li>Wash out with soap and water when done</li>
  </ul>
  ),
)

Product.where(category: hair, slug: 'hair-wax', site: site).first_or_create.update(
  name: 'Wax',
  slug: 'hair-wax',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'hair-wax.jpg')),
  asin: 'B00NVPBQUY',
  offer_id: '86LHZ7PF3EjhN8JdOwpa%2Fpkmv%2FdElKoOgpNeYfdQuDpRlzFBjKCWtK6LNqdTn0kC9J2gbxgSBvemxW5QZoa310Kp8p5ow4Nmer5eRC3NepnproEBpznLpjLwzSNLkjreN0H2fMPMxUOoUPnBUz9qpA%3D%3D',
  price: 21.0,
  description: %(
  <p>Perfect for the "Mad Men" look, this water wax allows for a variety of different looks.</p>
  ).strip,
  why: %(
  <ul>
    <li>Pleasing scent and effective hold</li>
    <li>Versatile looks</li>
    <li>Water wax based</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Wax provides a no-product look with a strong hold (unlike <a href="/pomade">pomade</a> with a sleek look or <a href="/hair-putty">putty</a> with a matte look)</li>
    <li>Apply to towel-dried hair for a slick, wet look or in dry short hair for a soft texture</li>
    <li>If you have long hair, work it through the ends for smooth separation</li>
  </ul>
  ),
)

Product.where(category: hair, slug: 'hair-brush', site: site).first_or_create.update(
  name: 'Brush',
  slug: 'hair-brush',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'hair-brush.jpg')),
  asin: 'B019YLZKSW',
  offer_id: 'OnfG5ePppePzdt95zk%2BhZW6fXinXxvwufdaZBqSwzNx72Zf6rL24h3x85Yz6Bp2xM0t8bum5m05j590CDHa%2F%2FoGQtXcTFsXKmhB7RXYNtDMe2eeyJyg5NwWsJqakZk%2Bl2RnOkG7Auprg8s5wvgLtQdjdfTtAgqHB',
  price: 10.95,
  description: %(
  <p>Useful for both hair and beard, this military-style brush is made from 100% soft boar hair</p>
  ).strip,
  why: %(
  <ul>
    <li>High-quality materials</li>
    <li>Comfortable shape</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use to promote hair health and distribute natural oils or product through hair</li>
  </ul>
  ),
)

Product.where(category: hair, slug: 'comb', site: site).first_or_create.update(
  name: 'Comb',
  slug: 'comb',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'comb.jpg')),
  asin: 'B000YB1TV4',
  offer_id: 'jHTVIEspmQD9uoisayDtKxhZHYDgS8qRwEUgTarEplPEiIuTVdfHkgMiVxW0mbMbiAL%2FBk6qmpHQbzreOgaelPUBDQRmps%2FF191KTrMmHTSuvoZzFkLJ%2FD19%2F9fhFo5glTgrBEDyAYef6ULHYph%2Ftw%3D%3D',
  price: 10.2,
  description: %(
  <p>Includes both coarse and fine-toothed sides</p>
  ).strip,
  why: %(
  <ul>
    <li>Quality craftsmanship</li>
    <li>Cult following</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use for styling damp hair</li>
    <li>Use to clean and stimulate the scalp to promote healthy hair</li>
    <li>It\'s a comb, you know what to do</li>
  </ul>
  ),
)

Product.where(category: hair, slug: 'hair-trimmer', site: site).first_or_create.update(
  name: 'Hair Trimmer',
  slug: 'hair-trimmer',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'hair-trimmer.jpg')),
  asin: 'B00QYOSKH6',
  offer_id: 'ximqlZ%2B5XgdfMTg56mmRSiyc%2BZ8j%2BLMIy7LnF0Pu9h8ydEvapHLvfvOQW4re9h4fOauZdfWY2fXPD4RtYArcSxKnMfrDturfP3Nx%2BSHlno%2FjIEx2IQRLuQ%3D%3D',
  price: 14.95,
  description: %(
  <p>Powerful and precise, this trimmer is engineered for tight spaces.  Designed to trim sharper and faster with maximum comfort.</p>
  ).strip,
  why: %(
  <ul>
    <li>Quality design that is easy to use</li>
    <li>Easy faucet clean-up as the trimmer is water resistant</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use for trimming unwanted nose, ear, or eyebrow hair</li>
  </ul>
  ),
)

Product.where(category: beard, slug: 'safety-razor', site: site).first_or_create.update(
  name: 'Safety Razor',
  slug: 'safety-razor',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'safety-razor.jpg')),
  asin: 'B00HZ4VFO4',
  offer_id: 'uDbuddlLySpR5MH%2FKiMNH9nJz%2FVh0bSiXGyXQdaBYsd%2BtQabLJpf5gUrJk9wsMcHszXcGOH55i6PCGU%2BmFHF0%2BqGrji0%2FYfaPJNFSE1OaLMkXuUEIflngUmcMz3VEpzJdy0VzLkfYAn6IYPnhfi4idy2sTB37TRa',
  price: 24.21,
  description: %(
  <p>Made in Solingen, Germany.</p>
  ).strip,
  why: %(
  <ul>
    <li>High-quality with a noticeable heft</li>
    <li>Butterfly design that makes blade replacement safe and easy</li>
    <li>Safety razor is less prone to clogging than a cartridge razor and can cut in a single pass (preventing irritation and ingrown hairs)</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Replace blades after 5 - 7 uses</li>
    <li>Pair with <a href="/razor-blades">ice-tempered replacement blades</a> (5 blades are included with the razor itself)</li>
  </ul>
  ),
)

Product.where(category: beard, slug: 'razor-blades', site: site).first_or_create.update(
  name: 'Razor Blades',
  slug: 'razor-blades',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'razor-blades.jpg')),
  asin: 'B00HZ4THW6',
  offer_id: 'NJcUv3qgLTRM9zhSNyLJbF516der%2FBpMBeUqMv6%2FLJyL8vXYVxLguoK3jbR6axznf6cvUhXqnNIzZ9bHYupFxHIgbGczG%2BfcFq4AiEGFn4HuCR%2Bo2kLUyz14NU8py2lSovAhuYteiyfTALD6gXrbVKZoGsIG2PLg',
  price: 16.97,
  description: %(
  <p>Ice tempered blades made in Germany.</p>
  ).strip,
  why: %(
  <ul>
    <li>Inexpensive ice-tempered blades</li>
    <li>Expert craftsmanship</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Replace after 5 - 7 uses (pack includes 10 blades)</li>
  </ul>
  ),
)

Product.where(category: beard, slug: 'razor-stand', site: site).first_or_create.update(
  name: 'Razor Stand',
  slug: 'razor-stand',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'razor-stand.jpg')),
  asin: 'B00KO46CTA',
  offer_id: 'NNTvqOTBerAlNJpV%2B7JMQk%2Bx%2BROOc6xNj3xIytKvwl4mZ5OSxr28MJc%2B5dCM%2BxegpqqWQ3AXlWcSo8jYuwTJHAxxzUobga7Uzf8SjECJCLfL8%2Bnp9kZ9z0NolCeYfWIlDY2DsGPoyXvtZZKQ2HJ1sWZZCvDsts4C',
  price: 16.95,
  description: %(
  <p>Stand allows for display and storage of your <a href="/safety-razor">safety razor</a> and <a href="/shaving-brush">shaving brush</a>.</p>
  ).strip,
  why: %(
  <ul>
    <li>Allows your <a href="/shaving-brush">shaving brush</a> to dry, extending life and promoting hygiene</li>
    <li>Weighted base provides stability and includes a non-slip sole</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Your razor and brush are meant to be cared-for and displayed - adds joy to shaving</li>
  </ul>
  ),
)

Product.where(category: beard, slug: 'shaving-soap', site: site).first_or_create.update(
  name: 'Shaving Soap',
  slug: 'shaving-soap',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'shaving-soap.jpg')),
  asin: 'B00P0KP8M0',
  offer_id: 'GZ2HyeAkUCPCt6fzwFqUNDwOX2lYR6nfnrLjNFZJGlAVBOlp4VhoFpQBLHTgrnfjvz8pX0k6VvIJZUDjycobeWdfmil5VZCcvqtyuWcC6xdak42F0nXL0TQ9P7sJgOZPicrTdgEcstxppwhXiXZxEJBuBkLS4G7Y',
  price: 26.0,
  description: %(
  <p>Produces a russet lather that tempers a bristly beard's texture.</p>
  ).strip,
  why: %(
  <ul>
    <li>Quality soap acts as a shampoo and lather for shaving</li>
    <li>Omits harmful synthetic ingredients</li>
    <li>Formula rinses away soap but leaves natural oil</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use when shaving (or as an alternative, consider <a href="/shaving-cream">shaving cream</a>)</li>
  </ul>
  ),
)

Product.where(category: beard, slug: 'shaving-brush', site: site).first_or_create.update(
  name: 'Shaving Brush',
  slug: 'shaving-brush',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'shaving-brush.jpg')),
  asin: 'B00LMTHSF8',
  offer_id: 'E9XmD%2FED7UVbqXX%2BUa9ujo0p6v22wY26L8nq7pMcjv1tuTap9N%2FOtN39%2BfTqQ7YTrkqaM1JH5mPX%2Bum%2B0%2FgtaeV1fEHR1GAuovyEtJzAAREWW%2BpacXMYMQ%2FbwrLjwXdkaP7TTmbjQQvxmqIkPUD0iy877R9ymPmV',
  price: 9.95,
  description: %(
  <p>This densely filled brush head is ideal for holding and distributing lather.</p>
  ).strip,
  why: %(
  <ul>
    <li>Made of 100% badger hair bristles</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use during shaving to bring water and soap to face</li>
    <li>Helps soften and raise beard to prepare for shaving</li>
    <li>Pair with a <a href="/razor-stand">razor stand</a> for hygienic drying</li>
  </ul>
  ),
)

Product.where(category: beard, slug: 'shaving-mug', site: site).first_or_create.update(
  name: 'Shaving Mug',
  slug: 'shaving-mug',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'shaving-mug.jpg')),
  asin: 'B000FIH8XO',
  offer_id: 'exRHM1lWL8fjH2cZHInaX9ulQd0fn8SoRRmmaUDNrp87lO8YBGAHWYJgnqDBz46%2FKY%2BL066cDDcTEoFejyTauoKRpbXBZ77ZaSQQdE53lSplXL9kAUHfIw%3D%3D',
  price: 29.92,
  description: %(
  <p>Classic black porcelain shaving soap bowl with handle.  This is an ideal accompaniment to a wet shavers daily routine.</p>
  ).strip,
  why: %(
  <ul>
    <li>Quality shaving mug with handle</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use to hold <a href="/shaving-soap">shaving soap</a> and to form lather when shaving with a <a href="/shaving-brush">shaving brush</a></li>
  </ul>
  ),
)

Product.where(category: beard, slug: 'shaving-cream', site: site).first_or_create.update(
  name: 'Shaving Cream',
  slug: 'shaving-cream',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'shaving-cream.jpg')),
  asin: 'B001E283SE',
  offer_id: 'LjCc1g5B%2Fc4VjMwavpIGvwAN1Mbov2b8VEgX3utbaMN%2B0dx%2Fd0CkQ13sE5RvMhIaDinukC84%2BGv8uRUMWTrre3oQDJH%2BSjAYGPcDcTUY0zPodqaNck1VQqS0ch7gKv%2Bur6B%2Bal8UqejSvqKu7XgU%2Bg%3D%3D',
  price: 11.28,
  description: %(
  <p>Extremely rich cream formulated with powerful skin conditioners for an incredibly close and comfortable shave.</p>
  ).strip,
  why: %(
  <ul>
    <li>Contains no air (unlike other gels or creams) to avoid nicks and cuts</li>
    <li>Rich lather</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Consider as an alternative to <a href="/shaving-soap">shaving soap</a></li>
    <li>Rub face with hottest water you can stand for 30 seconds</li>
    <li>Leave face wet and apply cream to activate (an almond-sized amount)</li>
    <li>Tube includes 60 days of product</li>
  </ul>
  ),
)

Product.where(category: beard, slug: 'beard-oil', site: site).first_or_create.update(
  name: 'Beard Oil',
  slug: 'beard-oil',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'beard-oil.jpg')),
  asin: 'B00WF6VFSS',
  offer_id: 'juuA6tJiXdq3XFycuJ0JVGnVG69Dk%2BfUfdO4AAdSZhBzy%2F7YeLl3I%2FaG%2Fqt0TWdkczgWRt%2B%2Ba5nMH%2BHfC09QN9wit07UdqXc8AGC2KiKGVNUxQY2Bvind34JS8Vk0E3Yx8%2BP15s7NyqgfWPZnCWCqx1UnUPcqNlx',
  price: 19.97,
  description: %(
  <p>Includes Vitamin E and Evening Primrose oil to reduce beard itch and stop dandruff.</p>
  ).strip,
  why: %(
  <ul>
    <li>Promotes beard health with nourishing ingredients</li>
    <li>Unscented so it will not clash with cologne, aftershave, etc.</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Apply to beard damp or dry</li>
    <li>Use a few drops per day in your hand, then rub into beard</li>
  </ul>
  ),
)

Product.where(category: beard, slug: 'beard-trimmer', site: site).first_or_create.update(
  name: 'Beard Trimmer',
  slug: 'beard-trimmer',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'beard-trimmer.jpg')),
  asin: 'B003U8ESI4',
  offer_id: 'YZQ2l36qv5aLq48Mn8xgTp6C%2FnoNWBkLBUEeQwJIT2uMFeK8%2FlzUswioOxEtUYTJHRTpOGhdy4mwPvBx2BG7LoLaoTBkpjG32PEY25ogWw3mb9yMO%2BSdgg%3D%3D',
  price: 49.95,
  description: %(
  <p>Cuts from 1/32 inch up to 23/32 inch (1mm up to 18mm), with 1/64 inch (.5mm) stubble setting.</p>
  ).strip,
  why: %(
  <ul>
    <li>Effective trimmer with integrated vacuum to reduce mess</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use to trim beard hair, fade to neck, blend sideburns, etc.</li>
  </ul>
  ),
)

Product.where(category: skin, slug: 'exfoliant', site: site).first_or_create.update(
  name: 'Exfoliating Scrub',
  slug: 'exfoliant',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'exfoliant.jpg')),
  asin: 'B003607ZNG',
  offer_id: '6pypaGX9%2BqOFNSFpb%2BAHq7lyCNisGvKOdF5agcxigLMdCpiPBett%2BRuibrq0TUF%2BEcrHQrK6UULsQq4BwBVMNGoGvwSJDtViU4k55VT9fhKzX8Lf%2FgXcoQ5uk4ElK9PIhRIvNxBpqdyNC5w19A7yEEqBQlUL%2FX05',
  price: 16.99,
  description: %(
  <p>Exfoliating, toning, and balancing, contains volcanic ash, Japanese adzuki bean powder, rice bran, vitamin A, and vitamin E.</p>
  ).strip,
  why: %(
  <ul>
    <li>Removes dead skin cells, excess oils and toxins, ingrown hairs, and dirt</li>
    <li>Ingredients nourish skin to improve elasticity and overall health</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Massage all over face on wet skin in a circular motion</li>
    <li>Let sit for one minute, then rinse</li>
    <li>Use 1 or 2 times per week or as needed</li>
  </ul>
  ),
)

Product.where(category: skin, slug: 'cleanser', site: site).first_or_create.update(
  name: 'Cleanser',
  slug: 'cleanser',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'cleanser.jpg')),
  asin: 'B0177M6K8E',
  offer_id: 'abRO%2F%2Fpx8i7LgK5VVkEAR0O9Gf7USbGul0%2BUSMS6BQZSO2Cxh1uPp7Lj1vxNsYMEG8Wi%2BjdcxnGvvn7MWii5ug4zORVr29pD6wtKwEI05XmECqrzkbDNd0K5jZ1rGlDz%2Fkm7B3pCRIhWmwPK%2FU2PumSSWKfq3bd%2F',
  price: 23.96,
  description: %(
  <p>Cleans your skin without leaving it dry and stripped of its natural moisture.</p>
  ).strip,
  why: %(
  <ul>
    <li>Daily clean promotes healthy skin</li>
    <li>Works well for all skin types, including sensitive skin</li>
    <li>Fragrance-free so it won\'t clash with other products</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use daily followed by a <a href="/moisturizer">moisturizer</a> and <a href="/sunscreen">sunscreen</a> for optimum health.</li>
  </ul>
  ),
)

Product.where(category: skin, slug: 'moisturizer', site: site).first_or_create.update(
  name: 'Moisturizer',
  slug: 'moisturizer',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'moisturizer.jpg')),
  asin: 'B0177M2K1U',
  offer_id: 'XlsI%2Fp7hjmhWvIAYe9ipljHeKjwwUBrOstmnPOvZa1RCGEmJ9mn0vfWbwGxfBrHidu6rMBct%2BNgg83XTUIROikjiI%2Fl4WHLEhJNbf%2B24q1US1V0QhJQiTpIiRvFhKDAWsnYfja8ue45CmNPq7n8xM3t9gA%2BMIqAf',
  price: 23.96,
  description: %(
  <p>All-natural and packed full of essential vitamins, minerals and antioxidants. Leaves skin feeling clean, fresh and free from excessive oil and grease.</p>
  ).strip,
  why: %(
  <ul>
    <li>Keeps skin healthy and prevents drying out, wrinkles, and cracking</li>
    <li>Works well for all skin types, including sensitive skin</li>
    <li>Fragrance-free so it won\'t clash with other products</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use daily after a <a href="/cleanser">cleanser</a> and follow with <a href="/sunscreen">sunscreen</a> for optimum health and protection.</li>
  </ul>
  ),
)

Product.where(category: skin, slug: 'eye-cream', site: site).first_or_create.update(
  name: 'Eye Cream',
  slug: 'eye-cream',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'eye-cream.jpg')),
  asin: 'B004ALIOZ8',
  offer_id: 'dDSECjK4yLywIoRBTb1oGGRj8AClYNKRAP67M6sEemQKf0YESHcpWl92WVXeUXfm47kMbWevW65eHTRA05n1NzkqATYDdA8y3%2FlvnPB1GJD2XFkPOMffa3vW2IzTTX6BVpxVd9dpmvVcHPtdxI9YvCuIqccRb%2Bpj',
  price: 12.99,
  description: %(
  <p>Cellular radiance creme and uplifting eye gel combine to energize and brighten the under eye area.  Provides long term anti-aging effects.</p>
  ).strip,
  why: %(
  <ul>
    <li>Specially targets and protects delicate skin around eyes</li>
    <li>Reduces sagging skin and bags</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use twice daily, once after waking and once before bed</li>
  </ul>
  ),
)

Product.where(category: skin, slug: 'sunscreen', site: site).first_or_create.update(
  name: 'sunscreen',
  slug: 'sunscreen',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'sunscreen.jpg')),
  asin: 'B002JAYMEE',
  offer_id: '16mBQev3mf79bpCXn3o9u8dqdTpAjEfTfCiiqgKwvL7EHBBCEw3Uobhsi9H9zBLQBDiUzjmZuX1C4eesC3WmpNQEQFcFxp4jiL0Sqxwbm8h4fErGT71xdA%3D%3D',
  price: 10.9,
  description: %(
  <p>Waterproof, sweatproof, applies dry.  Provides broadspectrum protection against skinaging UVA and burning UVB rays.</p>
  ).strip,
  why: %(
  <ul>
    <li>Essential for long-term protection of skin against sun damage and cancer</li>
    <li>SPF 100, unlike low-SPF products, is actually able to protect</li>
    <li>Non-comedogenic (won\'t clog pores)</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use daily</li>
  </ul>
  ),
)

Product.where(category: skin, slug: 'body-wash', site: site).first_or_create.update(
  name: 'Body Wash',
  slug: 'body-wash',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'body-wash.jpg')),
  asin: 'B00V9AB9W8',
  offer_id: 'dNhaZXnklmTbefxrRAKv2Z4DxW6ELklJgO3U0cpUgqJvVNyHm0c0FLwWeLhoT4xkVrLvyb9yF%2Fg8fLJ6NmOXVKkQFIgn4TpCni8GC9JQk%2FjmpRvCPs%2FRYzqSLKkY2NzAuRit1AFBqHt7KnhgGuDug8bi69QBWbFh',
  price: 12.67,
  description: %(
  <p>Contains coconut-derived surfactants to cleanse, essential oils of Eucalyptus and Spearmint to refresh, and glycerin helps retain skin's moisture.</p>
  ).strip,
  why: %(
  <ul>
    <li>Unlike bar soap, will not dry out skin</li>
    <li>Contains essential oils to nourish skin</li>
    <li>Superior clean to other body washes</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>It\'s body wash, wash your body with it</li>
  </ul>
  ),
)

Product.where(category: skin, slug: 'washcloth', site: site).first_or_create.update(
  name: 'Washcloth',
  slug: 'washcloth',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'washcloth.jpg')),
  asin: 'B00AU2157U',
  offer_id: 'LdBsUSnK0O3lDpPAA2F54mk4onPaf46DPgqXk%2FEjVkUovlcmE9L8td1l3OSMh7eJ1Zf9edbORFOEYTn8AAfjwd0W5NN6KpnRPg1UwzF8kv%2FxzE7T%2FXCZueAQ1Bz7T6MCrBq2s4kBdqJ8o5tUzU7LUcfc15SzU3dl',
  price: 9.32,
  description: %(
  <p>Pack of six.</p>
  ).strip,
  why: %(
  <ul>
    <li>Set of 6 for cleaning your face</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use to clean face</li>
  </ul>
  ),
)

Product.where(category: skin, slug: 'nail-clippers', site: site).first_or_create.update(
  name: 'Nail Clippers',
  slug: 'nail-clippers',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'nail-clippers.jpg')),
  asin: 'B009WUA658',
  offer_id: 'o9Jdv9tRYDl4%2B0eWKIKoUlSHGZsUO5%2FT2Ev7ophBrbnROTJ%2BX8XdcOAEJ8SCiWs%2BPgls%2BTRFKFfg25I2SdHvLy4uxQlSDcGR7Mqb7t6SuLk8uB8%2Fu0EG4w%3D%3D',
  price: 9.0,
  description: %(
  <p>Strong, sharp stainless steel blades.  Durable and easy to clean.</p>
  ).strip,
  why: %(
  <ul>
    <li>Excellent quality and performance</li>
    <li>Includes clippers for both toenails and fingernails</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: teeth, slug: 'toothbrush', site: site).first_or_create.update(
  name: 'Toothbrush',
  slug: 'toothbrush',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'toothbrush.jpg')),
  asin: 'B00HFQQ0XS',
  offer_id: 'bLQ86TiLRuMpEN7DHJgfKGDCrlkYtmNIHCVZpxT67%2FYTHB%2Fwx%2Fej55744bq%2FWBXsrzt12EppnEPpkY16wuX86hMStEbqipZdZs1ClJh1sSTq389SlteHTQ%3D%3D',
  price: 9.99,
  description: %(
  <p>16k gentle pulses per second, cleans plaque from hard-to-reach areas.</p>
  ).strip,
  why: %(
  <ul>
    <li>More effective than a traditional toothbrush</li>
    <li>Exceptional results for the price</li>
    <li>Soft bristles for gum health</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Standard toothbrush rules apply (brush after meals for 2 minutes)</li>
    <li>Replace toothbrush head every three months (<a href="http://amzn.to/1VH41EO">replacement head</a>)</li>
    <li>Pair with a <a href="/toothpaste">quality toothpaste</a> for a deep clean</li>
  </ul>
  ),
)

Product.where(category: teeth, slug: 'toothpaste', site: site).first_or_create.update(
  name: 'Toothpaste',
  slug: 'toothpaste',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'toothpaste.jpg')),
  asin: 'B000MEKG30',
  offer_id: '%2FJ6liUqY3yvQejjZ%2Fma1ycWu982uPGalSp8C27%2FXwLf3pxkr9J5o%2BcjvC%2FkwpSh7pAGIfYFYKoowoLS2f42nerxG3ygWKSHwo%2F3WAB4ZUfTNgLSNu',
  price: 13.5,
  description: %(
  <p>Pleasant and lasting freshness, includes basic whitening ingredients.</p>
  ).strip,
  why: %(
  <ul>
    <li>Quality ingredients</li>
    <li>Mint for extra flavor / freshness</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use a pea-sized amount of toothpaste when brushing</li>
    <li>Pair with a <a href="/toothbrush">sonic toothbrush</a> for an extra clean</li>
  </ul>
  ),
)

Product.where(category: teeth, slug: 'mouthwash', site: site).first_or_create.update(
  name: 'Mouthwash',
  slug: 'mouthwash',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'mouthwash.jpg')),
  asin: 'B00WVT2DDK',
  offer_id: 'MvyxksoPnMpUIAR0IFiUhXb%2Bo%2FfLX51qHGvh1OkDdqUBtLZa4tBmy0vZ3J995umeSJe75UN3WiCfO9i34LFhXcUPbovFQUUe%2BMDUV6YLFJR8AU%2BXJ%2FGejAxLnQMpw9HPJi3C9Bb1W83npwiNs%2BfBw9y%2BZuwe178L',
  price: 14.48,
  description: %(
  <p>A soothing mild mouthwash that cleans and refreshes the mouth no burning sensation on gums or tongue.  Cool fresh minty flavor.</p>
  ).strip,
  why: %(
  <ul>
    <li>Alcohol-free, with no artificial dyes</li>
    <li>Cleans and refreshes without burning</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Use once per day after waking</li>
    <li>Swish for 30 seconds then discharge</li>
    <li>Avoid rinsing with water afterwards for best effect</li>
  </ul>
  ),
)

Product.where(category: style, slug: 'deodorant', site: site).first_or_create.update(
  name: 'Deodorant',
  slug: 'deodorant',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'deodorant.jpg')),
  asin: 'B001FWXHIY',
  offer_id: 'POjo1Q8xs1MJ4291U4aqjBT7uncWTMfC9N2rOiJmU6FWVG2iSdrXBOUYXc%2B7kFoz8a0wHxGFeK8irJSOwJAly9YPCZRqFaJrLLcFsJqkXXg%3D',
  price: 15.49,
  description: %(
  <p>Alcohol-free.</p>
  ).strip,
  why: %(
  <ul>
    <li>Lasts several times longer than most other deodorant sticks</li>
    <li>Pleasant but not overpowering smell</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: style, slug: 'cologne', site: site).first_or_create.update(
  name: 'Cologne',
  slug: 'cologne',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'cologne.jpg')),
  asin: 'B000C213ZM',
  offer_id: 'NDfmEookOmrgfUjVmpOT3lN2z6IIAhOJ3Y9Poc35qmZGJcMDWP1uPvJ0%2B5%2FypXdpqVy%2FWO6bMWYEhDj56ttdNWiUqD4YO5jDbUal2RG3OKXSCI%2BEOgU0xQ%3D%3D',
  price: 39.32,
  description: %(
  <p>Introduced in 1982. Fragrance notes: lavender, citrus, spicy berries and sandalwood.</p>
  ).strip,
  why: %(
  <ul>
    <li>Timeless scent that isn\'t mainstream</li>
    <li>"Eau De Toilette," so not overpowering</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>You may also prefer <a href="/aftershave">aftershave</a> which has a weaker scent but more soothing qualities (for after shaving)</li>
  </ul>
  ),
)

Product.where(category: style, slug: 'aftershave', site: site).first_or_create.update(
  name: 'Aftershave',
  slug: 'aftershave',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'aftershave.jpg')),
  asin: 'B009VZNV3I',
  offer_id: 'cWEdnKnFb1jJ4OchohK%2FOIYq1DvOn2Wi6ghmzNVIG18bYF3YOIA9%2Bs1qAvUWGAdO9uvKssYS1bcdzgGQeHpIg7dVCoxgMcfsmLy1btfLhtQWeIoqEL7h%2FA%3D%3D',
  price: 16.0,
  description: %(
  <p>Enriched with vitamin E to moisturize, aloe vera to calm and licorice extract to soothe skin.</p>
  ).strip,
  why: %(
  <ul>
    <li>Moisturizes, strengthens, and protects after the trauma of shaving</li>
    <li>Helps avoid bumps and rough skin after shaving</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Apply after shaving</li>
    <li>You may consider this as an alternative to <a href="/cologne">cologne</a> as it has a weaker scent but more nourishing components (and unlike cologne is applied directly to the face)</li>
    <li>If you want to pair with a cologne, consider an <a href="http://www.amazon.com/gp/product/B00OBWSBGS/ref=as_li_tl?ie=UTF8&tag=ja07-20">unscented aftershave</a> to not clash</li>
  </ul>
  ),
)

Product.where(category: style, slug: 'dopp-kit', site: site).first_or_create.update(
  name: 'Dopp Kit',
  slug: 'dopp-kit',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'dopp-kit.jpg')),
  asin: 'B011ZLWHW6',
  offer_id: 'ddHVYbEfu0wQ3AnuAgE5Ey6hNIhLQ%2FOvkqnagWFxkyqdL0bU0CZ6SRGci3IC6ebBpDtzvo46iMVaql09Dle4DbNlvNWfpqhWo%2FbUWNIMel1yEN%2F6iXBsLj9PBecDfO5TE0OS1pbhqLqIvxukQ9lSRYlgZs4gWZkj',
  price: 27.0,
  description: %(
  <p>Big enough to pack all your necessities for an overnight or weekend trip. Sturdy top grain leather handle makes it easy to carry from your luggage to your vanity. Will age beautifully and never go out of style.</p>
  ).strip,
  why: %(
  <ul>
    <li>Top quality waxed canvas, nylon, and tanned leather</li>
    <li>Waxed cotton canvas and nylon make this almost waterproof</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Store your toiletries in it for ultimate organization and portability</li>
  </ul>
  ),
)

Product.where(category: style, slug: 'watch', site: site).first_or_create.update(
  name: 'Watch',
  slug: 'watch',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'watch.jpg')),
  asin: 'B00FWXARMQ',
  offer_id: 'LyEoLABTEP67NIJshfPcUDWo1SLp2ia76m6Pqq%2FfXm0BTWsL68jiu1YtAwrJfZ%2F1CY%2BwCCz9iPQwPpJsDZV7cUX1wrJ%2BjMTZ9Oh5kx%2FtjXAwGN2RJnQWuw%3D%3D',
  price: 89.63,
  description: %(
  <p>40 mm stainless steel case with mineral dial window.  Water resistant to 30m (99ft - splashes okay, but no swimming)
  ).strip,
  why: %(
  <ul>
    <li>Classic-inspired design, adds an often-overlooked element to mens style</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: style, slug: 'messenger-bag', site: site).first_or_create.update(
  name: 'Messenger Bag',
  slug: 'messenger-bag',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'messenger-bag.jpg')),
  asin: 'B00W045OY6',
  offer_id: 'YsrE4rn8GiAl1k%2BtrUhF8%2FGhE0U8IalWD7QBbW5sJwRgrYj9Bb5oi4YEtrzuAJPsP6dbOWkS%2BXg%2BxhxmC6qh9H0FTyWZi3tjtSovyio6vu%2B2HI%2BIUsHL5CM6mDNSkdh1RzmXImwD54yKWETJtK9bAKRYt2Zpjt2p',
  price: 35.9,
  description: %(
  <p>Canvas. Size: 16 x 13.5 x 5 inches</p>
  ).strip,
  why: %(
  <ul>
    <li>Stylish messenger bag for holding books, supplies, and a laptop (up to 15")</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: skills, slug: 'cookbook', site: site).first_or_create.update(
  name: 'Cookbook',
  slug: 'cookbook',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'cookbook.jpg')),
  asin: '1594744742',
  offer_id: '%2BuLqpBwSB3Xvkc%2BcsyhQmzgkunIX0V0z32k3sPOCPokV0%2B8lW5MYQWj%2BObRv2CVXlRiHha2oC%2BbWHav8UY8DBIUkznRPAKYYeqo7z5E88JzolCGQfL2c9Q%3D%3D',
  price: 9.95,
  description: %(
  <p>
Easy pocket-sized companion shows you how to make all the food a man can’t live without.
Includes a quick, no-frills guide to culinary rules and tools.
</p>
  ).strip,
  why: %(
  <ul>
    <li>Versatile guide to cooking</li>
    <li>Understandable and doesn\'t assume cooking expert</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: skills, slug: 'wine-book', site: site).first_or_create.update(
  name: 'Wine',
  slug: 'wine-book',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'wine-book.jpg')),
  asin: '1592408990',
  offer_id: 'wuNTzRu5wIaS83UxKNvtCBQD%2B2byPJUkvSZ1x21a4lNl5SPekl8ojSTRCHrp8Cz%2FqhAhbraA8ZknzSnMwBv8%2F7A%2FrETtrxJnv0sGbgZOxdJ5XI9mpH7ydw%3D%3D',
  price: 14.88,
  description: %(
  <p>
An essential, hip guide to wine for the new generation of wine drinkers.
</p>
  ).strip,
  why: %(
  <ul>
    <li>Unique infographic style that delivers all essential wine information in an extremely easy to digest format</li>
    <li>Excellent reference for understanding wine, as well as a source for trying new wines</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: skills, slug: 'cocktail-book', site: site).first_or_create.update(
  name: 'Cocktails',
  slug: 'cocktail-book',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'cocktail-book.jpg')),
  asin: '1849754373',
  offer_id: 'wuNTzRu5wIaS83UxKNvtCBQD%2B2byPJUkvSZ1x21a4lNl5SPekl8ojSTRCHrp8Cz%2FqhAhbraA8ZknzSnMwBv8%2F7A%2FrETtrxJnv0sGbgZOxdJ5XI9mpH7ydw%3D%3D',
  price: 14.47,
  description: %(
  <p>
From cocktail origins, to twists on classics, to reference guides, this is an essential for the cocktail enthusiast.
</p>
  ).strip,
  why: %(
  <ul>
    <li>Essential guide to cocktails</li>
    <li>Everything is easily-explained</li>
    <li>Quality experience and technique</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: skills, slug: 'mindfulness-book', site: site).first_or_create.update(
  name: 'Mindfulness',
  slug: 'mindfulness-book',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'mindfulness-book.jpg')),
  asin: '0738213241',
  offer_id: 'XXiIkB62%2BohpPtA3Le%2F0rWz%2BwQfFg1eUYP4xuFJAdKmbmg6EGZTKh2V3fpC6M5AWGlnb6yK%2FbPezrtRZi4g%2FeR2gDRtIH8FzV2oBZ%2BGeDS0%3D',
  price: 14.05,
  description: %(
  <p>
Provides an all-in-one guide for anyone interested in bringing mindfulness to daily life as a means of enhancing well-being.
</p>
  ).strip,
  why: %(
  <ul>
    <li>Covers the scientific explanation of how mindfulness positively and powerfully affects the brain</li>
    <li>Gives practical guidance on how to develop a practice of mindfulness in your daily life</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: skills, slug: 'grooming-book', site: site).first_or_create.update(
  name: 'Grooming',
  slug: 'grooming-book',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'grooming-book.jpg')),
  asin: '0804186979',
  offer_id: 'sxr4iLvSNzLPL9QbBCYn0SrGnOf%2FmbdD5I1UgRqzXJIq%2F4cCPCN3McsLRNCmBhSaWMB9gEmzR5DUk2ensliEIUzVgOsSR0ZacM%2FxvPXPpYc5pa0XJJtK1w%3D%3D',
  price: 19.48,
  description: %(
  <p>The first grooming and skin-care guide created with a 21st-century man in mind.</p>
  ).strip,
  why: %(
  <ul>
    <li>Essential reference to mens skincare, grooming, and style</li>
    <li>Useful as a guide for all the other essential supplies</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: skills, slug: 'photography-book', site: site).first_or_create.update(
  name: 'Photography',
  slug: 'photography-book',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'photography-book.jpg')),
  asin: '1780673353',
  offer_id: 'FnJuski5OrP2Ql5Drx6UwSky2Rqc1Vk7WYul4OCK9vxp7aTmmpCPq5Hv9fJ7ZrbK7WUXpvbTa4l8BMNV3iTDv4LZRkaYh%2BP3FW2BCJSwd3p9rG971%2Be5PQ%3D%3D',
  price: 10.94,
  description: %(
  <p>Split into five sections, the book covers composition, exposure, light, lenses, and seeing.</p>
  ).strip,
  why: %(
  <ul>
    <li>Essential guide to photography</li>
    <li>Great for moving out of amateur photo status</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: skills, slug: 'repair-book', site: site).first_or_create.update(
  name: 'Repair',
  slug: 'repair-book',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'repair-book.jpg')),
  asin: '146629633X',
  offer_id: 'D3LGazeO8LL5Lb05WBOWR5X3OuCJPXKrLu6vwAfd6kissDc7FvuJUB5fqrBfXRRE1cXEg7FPh2bLdiWHhS9OK917JinWpn0ICa7ebEFS6LuUJQbsxRC0hw%3D%3D',
  price: 10.36,
  description: %(
  <p>
Guide to repairing cars, household appliances, garden machines, and farm equipment, doing home improvements, and more.
</p>
  ).strip,
  why: %(
  <ul>
    <li>Everything you need to know about repair</li>
    <li>Requires no prior knowledge</li>
  </ul>
  ),
  directions: '',
)

Product.where(category: skills, slug: 'playing-cards', site: site).first_or_create.update(
  name: 'Playing Cards',
  slug: 'playing-cards',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'playing-cards.jpg')),
  asin: 'B0195MS910',
  offer_id: '8r9Y%2FnwL8ZKrlcw2qjwkkmVXjriBIX0O%2B35Osho4ulNzmvLC9akq53h94VmgPih%2BR4xK3920bGuuqjHefP5nZ1pZgNnjR%2FwHQqzNl6tiWAmq4XqA4mqe4I40arxAt5tdSjWPsjzefXdWcjSNg6lXrQ83WZ1dWhL6',
  price: 11.95,
  description: %(
  <p>Deck of playing cards.  10% of profits donated to support honey bees.</p>
  ).strip,
  why: %(
  <ul>
    <li>High-quality, classic look</li>
    <li>Natural coating that is not excessively slippery</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Pair with a <a href="/cards-book">game guide</a></li>
  </ul>
  ),
)

Product.where(category: skills, slug: 'cards-book', site: site).first_or_create.update(
  name: 'Card Games',
  slug: 'cards-book',
  order: 1,
  image: File.new(Rails.root.join('app', 'assets', 'images', 'products', 'cards-book.jpg')),
  asin: '0811866424',
  offer_id: 'N5fqzi5j%2FhDrUzu2HGy%2F8kh%2B9uDluNYpn8v0sfUS01A1Tzb%2BFQBJARvj65au4QkFu3UBXYJrAgaeFDywQMnBp4KoJqDHw9SeP4W9gcugjA7xg8Lpm%2BBzQA%3D%3D',
  price: 15.65,
  description: %(
  <p>Guide to over 350 games.  Simple instructions and clear illustrations.</p>
  ).strip,
  why: %(
  <ul>
    <li>Ideal for every household, college dorm, family cabin, or neighborhood bar</li>
  </ul>
  ),
  directions: %(
  <ul>
    <li>Pair with a deck of <a href="/playing-cards">playing cards</a></li>
  </ul>
  ),
)
