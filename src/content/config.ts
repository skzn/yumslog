import { z, defineCollection } from "astro:content";

const blogSchema = ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    draft: z.boolean().optional(),
    // 画像は相対パス（./image.png）または絶対パス（/image.png）に対応
    heroImage: z.union([image(), z.string()]).optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const storeSchema = ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.union([image(), z.string()]).optional(),
});

// 型定義は動的に生成されるため、inferは使用できません
export type BlogSchema = {
    title: string;
    description: string;
    pubDate: Date;
    updatedDate?: string;
    draft?: boolean;
    heroImage?: any;
    badge?: string;
    tags?: string[];
};
export type StoreSchema = {
    title: string;
    description: string;
    custom_link_label: string;
    custom_link?: string;
    updatedDate: Date;
    pricing?: string;
    oldPricing?: string;
    badge?: string;
    checkoutUrl?: string;
    heroImage?: any;
};

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection
}