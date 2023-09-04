package com.jeongmo.revise_blog.controller;

import com.jeongmo.revise_blog.dto.article_view.ArticleViewResponse;
import com.jeongmo.revise_blog.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class ArticleViewController {

    private final ArticleService articleService;

    @GetMapping("/home")
    public String mainPage(Model model) {
        List<ArticleViewResponse> articles = articleService.getArticles()
                .stream().map(ArticleViewResponse::new)
                .toList();
        model.addAttribute("articles", articles);
        return "mainPage";
    }

}