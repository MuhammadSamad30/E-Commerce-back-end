// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'id',
//       title: 'ID',
//       type: 'string',
//     },
//     {
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//     },
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'image', // Use 'image' type for images
//       options: {
//         hotspot: true, // Enables image cropping and focal point selection
//       },
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     },
//     {
//       name: 'discountPercentage',
//       title: 'Discount Percentage',
//       type: 'number',
//     },
//     {
//       name: 'isFeaturedProduct',
//       title: 'Is Featured Product',
//       type: 'boolean',
//     },
//     {
//       name: 'stockLevel',
//       title: 'Stock Level',
//       type: 'number',
//     },
//     {
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//     },
//   ],
// };

const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image', // Use 'image' type for images
      options: {
        hotspot: true, // Enables image cropping and focal point selection
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    },
    {
      name: 'isFeaturedProduct',
      title: 'Is Featured Product',
      type: 'boolean',
    },
    {
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
};

export default productSchema;
