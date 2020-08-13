<?php
 
require( "config.php" );
$action = isset( $_GET['action'] ) ? $_GET['action'] : "";
 
switch ( $action ) {
  case 'archive':
    archive();
    break;
  case 'viewArticle':
    viewArticle();
    break;
  case 'viewModelsFeatures':
    viewModelsFeatures();
    break;
  default:
    homepage();
}
require( TEMPLATE_PATH . "/include/footer.php" );

 
 
function archive() {
  $results = array();
  $data = Article::getList();
  $results['articles'] = $data['results'];
  $results['totalRows'] = $data['totalRows'];
  $results['pageTitle'] = "Article Archive | Widget News";
  require( TEMPLATE_PATH . "/include/header.php" );
  require( TEMPLATE_PATH . "/archive.php" );
}
 
function viewArticle() {
  if ( !isset($_GET["articleId"]) || !$_GET["articleId"] ) {
    homepage();
    return;
  }
 
  $results = array();
  $results['article'] = Article::getById( (int)$_GET["articleId"] );
  $results['pageTitle'] = $results['article']->title . " | Widget News";
  require( TEMPLATE_PATH . "/include/header.php" );
  require( TEMPLATE_PATH . "/viewArticle.php" );
}

function viewModelsFeatures() {
  $results = array();
  $results['pageTitle'] = "Сводная таблица моделей камер";
  require( TEMPLATE_PATH . "/include/header.php" );
  require( PAGES_PATH . "/show_models_features.php" );
}

function homepage() {
  $results = array();
  //$data = Article::getList( HOMEPAGE_NUM_ARTICLES );
  //$results['articles'] = $data['results'];
  //$results['totalRows'] = $data['totalRows'];
  $results['pageTitle'] = "Widget News";
  require( TEMPLATE_PATH . "/include/header.php" );
  require( TEMPLATE_PATH . "/homepage.php" );
}
 
?>
