<?php

require_once "config.php";


$action = isset($_GET['action']) ? $_GET['action'] : "";


session_start();
if (isset($_SESSION['login'])){
    echo '<left>Здравствуйте, '.$_SESSION['login'].'</left>';
    

}else{
 // header('Location:'.Registration()."");
 $_GET['action'] ='Registration';
}

switch ($action) {
    case 'archive':
        archive();
        break;
    case 'Registration':
       Registration();
        break;
    case 'viewArticle':
        viewArticle();
        break;
    case 'viewModelsFeatures':
        viewModelsFeatures();
        break;
        case 'Logout':
            Logout();
            break;
    default:
        homepage();
}
require TEMPLATE_PATH . "/include/footer.php";

function settitle($title)
{
    $results['pageTitle'] = $title;
    require TEMPLATE_PATH . "/include/header.php";
}

function archive()
{
    $results = array();
    $data = Article::getList();
    $results['articles'] = $data['results'];
    $results['totalRows'] = $data['totalRows'];
    $results['pageTitle'] = "Article Archive | Widget News";
    require TEMPLATE_PATH . "/include/header.php";
    require TEMPLATE_PATH . "/archive.php";
}

function Registration()
{
    $results = array();
    settitle("регистрация | авторизация");
    require TEMPLATE_PATH . "/autorization.php";
}
function Logout()
{
    $results = array();
    
    require TEMPLATE_PATH . "/logout.php";
}

function viewArticle()
{
    if (!isset($_GET["articleId"]) || !$_GET["articleId"]) {
        homepage();
        return;
    }

    $results = array();
    $results['article'] = Article::getById((int) $_GET["articleId"]);
    settitle($results['article']->title . " | Widget News");
    require TEMPLATE_PATH . "/viewArticle.php";
}

function viewModelsFeatures()
{
    $results = array();
    settitle("Сводная таблица моделей камер");
    require PAGES_PATH . "/show_models_features.php";
}

function homepage()
{
    $results = array();
    //$data = Article::getList( HOMEPAGE_NUM_ARTICLES );
    //$results['articles'] = $data['results'];
    //$results['totalRows'] = $data['totalRows'];
    settitle(TITLE);
    require TEMPLATE_PATH . "/homepage.php";
}
