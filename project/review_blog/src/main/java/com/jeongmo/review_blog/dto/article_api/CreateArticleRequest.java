package com.jeongmo.review_blog.dto.article_api;

import com.jeongmo.review_blog.domain.Article;
import com.jeongmo.review_blog.domain.Category;
import com.jeongmo.review_blog.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * DTO To create Article
 *
 */
@AllArgsConstructor
@Getter
public class CreateArticleRequest {
    private String title;
    private String content;


    private String category;

    /**
     * Build this to article
     *
     * @param author The writer of article
     * @return Return article which makes with title, content and (User) author.
     */
    public Article toEntity(User author, Category category) {
        return Article.builder()
                .title(this.title)
                .content(this.content)
                .author(author)
                .category(category)
                .build();
    }
}
