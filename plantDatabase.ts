import { Plant } from '../types/plant';

const houseplants: Plant[] = [
  {
    id: '1',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    description: 'The Peace Lily is a popular indoor plant known for its elegant white flowers and air-purifying qualities.',
    watering: 'Water when the top inch of soil is dry. Drooping leaves are a sign that the plant needs water.',
    light: 'Thrives in low to medium indirect light. Can tolerate lower light conditions.',
    soil: 'Well-draining potting mix rich in organic matter.',
    type: 'houseplant'
  },
  {
    id: '2',
    name: 'Snake Plant',
    scientificName: 'Dracaena trifasciata (formerly Sansevieria)',
    description: 'The Snake Plant is an extremely hardy houseplant with stiff, upright leaves. It\'s one of the most tolerant indoor plants available.',
    watering: 'Allow soil to dry completely between waterings. Water sparingly, especially in winter. Overwatering is the most common cause of problems.',
    light: 'Adaptable to most light conditions, from low light to bright indirect light. Can tolerate some direct sun.',
    soil: 'Well-draining, sandy soil. Cactus or succulent mix works well, or regular potting soil with added perlite or sand.',
    type: 'houseplant'
  },
  {
    id: '3',
    name: 'Pothos',
    scientificName: 'Epipremnum aureum',
    description: 'Pothos is a popular trailing vine with heart-shaped leaves, known for being nearly indestructible and perfect for beginners.',
    watering: 'Allow the top 1-2 inches of soil to dry between waterings. Reduce watering in winter. Can tolerate occasional missed waterings.',
    light: 'Adaptable to most light conditions except direct sunlight. Variegated varieties need brighter light to maintain their patterns.',
    soil: 'Standard well-draining potting mix. Not particularly fussy about soil type.',
    type: 'houseplant'
  },
  {
    id: '4',
    name: 'Spider Plant',
    scientificName: 'Chlorophytum comosum',
    description: 'The Spider Plant is known for its arching leaves and tiny plantlets that dangle down from the mother plant like spiders on a web.',
    watering: 'Keep soil lightly moist, allowing the top inch to dry between waterings. Brown tips may indicate under-watering or low humidity.',
    light: 'Bright to moderate indirect light. Avoid direct sunlight which can scorch the leaves.',
    soil: 'Well-draining, general-purpose potting mix.',
    type: 'houseplant'
  },
  {
    id: '5',
    name: 'ZZ Plant',
    scientificName: 'Zamioculcas zamiifolia',
    description: 'The ZZ Plant is a hardy, drought-tolerant houseplant with glossy, dark green leaves that grow from thick, potato-like rhizomes.',
    watering: 'Allow soil to dry completely between waterings. Can survive months without water if necessary. Highly susceptible to overwatering.',
    light: 'Tolerates low to bright indirect light. Not suitable for direct sunlight.',
    soil: 'Well-draining potting mix. Cactus mix with added perlite works well to prevent water retention.',
    type: 'houseplant'
  },
  {
    id: '6',
    name: 'Monstera',
    scientificName: 'Monstera deliciosa',
    description: 'Known for its distinctive split leaves, the Monstera is a popular tropical houseplant that adds a jungle-like feel to any space.',
    watering: 'Water when the top 1-2 inches of soil are dry. Reduce watering in winter. Ensure pot has drainage holes.',
    light: 'Bright, indirect light. Some morning or evening direct sun is fine, but avoid harsh midday sun which can burn the leaves.',
    soil: 'Rich, well-draining potting mix with some peat and perlite or bark chips for drainage and aeration.',
    type: 'houseplant'
  },
  {
    id: '7',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    description: 'Aloe Vera is a succulent plant species known for its medicinal properties and distinctive fleshy, serrated leaves.',
    watering: 'Water deeply but infrequently, allowing soil to dry completely between waterings. Water less in winter. Overwatering causes root rot.',
    light: 'Bright, indirect light with some direct sun. A south or west-facing window is ideal. Too little light causes leggy growth.',
    soil: 'Cactus or succulent mix with added coarse sand or perlite for excellent drainage.',
    type: 'houseplant'
  },
  {
    id: '8',
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    description: 'The Fiddle Leaf Fig is known for its large, violin-shaped leaves and has become one of the most popular indoor trees in recent years.',
    watering: 'Water when the top inch of soil is dry. Maintain consistent watering - neither too wet nor too dry. Water less in winter.',
    light: 'Bright, indirect light. Some direct morning sun is beneficial, but avoid harsh afternoon sun. Rotate periodically for even growth.',
    soil: 'Well-draining, nutrient-rich potting soil. A mix with some sand or perlite helps improve drainage.',
    type: 'houseplant'
  },
  {
    id: '9',
    name: 'Rubber Plant',
    scientificName: 'Ficus elastica',
    description: 'The Rubber Plant features thick, glossy leaves and is known for its air-purifying qualities and relatively easy care requirements.',
    watering: 'Water when the top inch of soil is dry. Reduce watering in winter. Avoid letting the plant sit in water.',
    light: 'Medium to bright indirect light. Can tolerate lower light conditions but growth will slow. Avoid direct sun except in winter.',
    soil: 'Well-draining potting mix. Standard indoor potting soil with some perlite for drainage works well.',
    type: 'houseplant'
  },
  {
    id: '10',
    name: 'Boston Fern',
    scientificName: 'Nephrolepis exaltata',
    description: 'The Boston Fern is known for its feathery, arching fronds and is one of the most popular ferns grown indoors.',
    watering: 'Keep soil consistently moist but not soggy. Increase humidity by misting or using a humidifier. Never allow to dry out completely.',
    light: 'Medium to bright indirect light. Avoid direct sunlight which can scorch the fronds. Some morning sun is usually fine.',
    soil: 'Rich, loamy potting mix with good water retention. A mix with peat moss works well for moisture retention.',
    type: 'houseplant'
  },
  {
    id: '11',
    name: 'Jade Plant',
    scientificName: 'Crassula ovata',
    description: 'The Jade Plant is a popular succulent houseplant with thick, woody stems and oval-shaped leaves. Often given as a symbol of good luck.',
    watering: 'Allow soil to dry completely between waterings. Water sparingly in winter. Overwatering is the most common killer of jade plants.',
    light: 'Bright, direct or indirect light for at least 4 hours daily. Some direct sun helps maintain compact growth and red leaf edges.',
    soil: 'Fast-draining cactus or succulent mix. Add extra perlite or coarse sand to improve drainage if necessary.',
    type: 'houseplant'
  },
  {
    id: '12',
    name: 'Calathea',
    scientificName: 'Calathea spp.',
    description: 'Calatheas are known for their stunning patterned leaves that move up and down following the light, earning them the nickname "prayer plant".',
    watering: 'Keep soil lightly moist at all times but not soggy. Use room temperature water as they are sensitive to chemicals in tap water. High humidity is essential.',
    light: 'Medium indirect light. Bright indirect light can be tolerated but never direct sun, which will fade the leaf patterns and burn the leaves.',
    soil: 'Rich, well-draining potting mix that retains some moisture. A mix with peat moss helps maintain adequate moisture.',
    type: 'houseplant'
  },
  {
    id: 'f1',
    name: 'Rose',
    scientificName: 'Rosa',
    description: 'Roses are beloved garden flowers known for their beautiful blooms and sweet fragrance. Available in countless colors and varieties.',
    watering: 'Water deeply when the top 2 inches of soil feel dry. Avoid wetting the foliage.',
    light: 'Full sun, at least 6 hours of direct sunlight daily.',
    soil: 'Rich, well-draining soil with plenty of organic matter.',
    type: 'flower'
  },
  {
    id: 'f2',
    name: 'Tulip',
    scientificName: 'Tulipa',
    description: 'Spring-blooming bulbs known for their perfect cup-shaped flowers in virtually every color except true blue.',
    watering: 'Water regularly during growing season, reduce after blooming.',
    light: 'Full sun to partial shade.',
    soil: 'Well-draining, fertile soil.',
    type: 'flower'
  },
  {
    id: 'f3',
    name: 'Sunflower',
    scientificName: 'Helianthus annuus',
    description: 'Tall annual flowers with large, sun-like blooms that track the sun. Height ranges from dwarf to giant varieties.',
    watering: 'Regular watering, especially during flowering. Drought tolerant once established.',
    light: 'Full sun, 6-8 hours daily.',
    soil: 'Well-draining, nutrient-rich soil.',
    type: 'flower'
  },
  {
    id: 'f4',
    name: 'Daisy',
    scientificName: 'Bellis perennis',
    description: 'Cheerful flowers with white petals and yellow centers, symbolizing innocence and purity.',
    watering: 'Keep soil consistently moist but not waterlogged.',
    light: 'Full sun to partial shade.',
    soil: 'Well-draining, moderately fertile soil.',
    type: 'flower'
  },
  {
    id: 'f5',
    name: 'Lily',
    scientificName: 'Lilium',
    description: 'Elegant flowers known for their large, showy blooms and often strong fragrance.',
    watering: 'Keep soil consistently moist. Water deeply when top inch of soil is dry.',
    light: 'Full sun to partial shade, depending on variety.',
    soil: 'Rich, well-draining soil with organic matter.',
    type: 'flower'
  },
  {
    id: 'f6',
    name: 'Orchid',
    scientificName: 'Orchidaceae',
    description: 'Exotic flowers with intricate blooms, available in countless varieties and colors.',
    watering: 'Allow medium to dry slightly between waterings. Avoid overwatering.',
    light: 'Bright, indirect light. Avoid direct sun.',
    soil: 'Special orchid mix with excellent drainage.',
    type: 'flower'
  },
  {
    id: 'f7',
    name: 'Carnation',
    scientificName: 'Dianthus caryophyllus',
    description: 'Ruffled flowers with a spicy fragrance, popular in both gardens and floral arrangements.',
    watering: 'Regular watering, keeping soil consistently moist.',
    light: 'Full sun, at least 6 hours daily.',
    soil: 'Well-draining, slightly alkaline soil.',
    type: 'flower'
  },
  {
    id: 'f8',
    name: 'Iris',
    scientificName: 'Iris',
    description: 'Elegant flowers with distinctive petals, available in many colors and patterns.',
    watering: 'Regular watering during growing season, reduce in dormancy.',
    light: 'Full sun to partial shade.',
    soil: 'Well-draining, moderately rich soil.',
    type: 'flower'
  },
  {
    id: 'f9',
    name: 'Peony',
    scientificName: 'Paeonia',
    description: 'Large, fragrant blooms with layered petals, known for their beauty and longevity.',
    watering: 'Regular watering, especially during blooming.',
    light: 'Full sun, 6+ hours daily.',
    soil: 'Rich, well-draining soil.',
    type: 'flower'
  },
  {
    id: 'f10',
    name: 'Daffodil',
    scientificName: 'Narcissus',
    description: 'Spring-blooming bulbs with distinctive trumpet-shaped centers.',
    watering: 'Regular watering during growing season, dormant in summer.',
    light: 'Full sun to partial shade.',
    soil: 'Well-draining soil, tolerates most types.',
    type: 'flower'
  },
  {
    id: 'f100',
    name: 'Star of Bethlehem',
    scientificName: 'Ornithogalum umbellatum',
    description: 'Delicate white star-shaped flowers that bloom in late spring.',
    watering: 'Regular watering during growing season, reduce when dormant.',
    light: 'Full sun to partial shade.',
    soil: 'Well-draining, fertile soil.',
    type: 'flower'
  },
  {
    id: 'f19',
    name: 'Lavender',
    scientificName: 'Lavandula',
    description: 'Fragrant herb known for its purple spikes and calming aroma. Popular in gardens, aromatherapy, and culinary uses.',
    watering: 'Water deeply but infrequently. Allow soil to dry between waterings. Drought tolerant once established.',
    light: 'Full sun, at least 6-8 hours of direct sunlight daily.',
    soil: 'Well-draining, slightly alkaline soil. Add lime to acidic soils.',
    type: 'flower'
  },
  ];
  
  const flowers: Plant[] = [
      // ...existing flowers...
    {
      id: 'f21',
      name: 'Snapdragon',
      scientificName: 'Antirrhinum',
      description: 'Colorful flowers that resemble a dragon’s mouth when squeezed. Popular in gardens and floral arrangements.',
      watering: 'Keep soil consistently moist but not soggy.',
      light: 'Full sun to partial shade.',
      soil: 'Well-draining, fertile soil.',
      type: 'flower'
    },
    {
      id: 'f22',
      name: 'Marigold',
      scientificName: 'Tagetes',
      description: 'Bright, cheerful flowers that bloom in shades of yellow, orange, and red. Known for their pest-repelling properties.',
      watering: 'Water regularly, keeping soil evenly moist but not soggy.',
      light: 'Full sun, at least 6 hours daily.',
      soil: 'Well-draining, moderately fertile soil.',
      type: 'flower'
    },
    {
      id: 'f23',
      name: 'Zinnia',
      scientificName: 'Zinnia elegans',
      description: 'Vibrant, daisy-like flowers that bloom in a variety of colors. Easy to grow and perfect for cutting gardens.',
      watering: 'Water deeply when the top inch of soil is dry.',
      light: 'Full sun, at least 6 hours daily.',
      soil: 'Well-draining, fertile soil.',
      type: 'flower'
    },
    {
      id: 'f24',
      name: 'Petunia',
      scientificName: 'Petunia × hybrida',
      description: 'Popular garden flowers with trumpet-shaped blooms in a wide range of colors. Ideal for hanging baskets and borders.',
      watering: 'Water regularly, keeping soil evenly moist.',
      light: 'Full sun to partial shade.',
      soil: 'Well-draining, fertile soil.',
      type: 'flower'
    },
    {
      id: 'f25',
      name: 'Pansy',
      scientificName: 'Viola tricolor var. hortensis',
      description: 'Charming flowers with a "face-like" appearance, available in many colors. Perfect for cool-season gardens.',
      watering: 'Keep soil consistently moist but not soggy.',
      light: 'Full sun to partial shade.',
      soil: 'Well-draining, fertile soil.',
      type: 'flower'
    }
];

export const plantDatabase: Plant[] = [...houseplants, ...flowers];